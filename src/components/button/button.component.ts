import { LitElement, html, nothing } from 'lit';
import { html as staticHtml, literal } from 'lit/static-html.js';
import { when } from 'lit/directives/when.js';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';

import { styles, normalizeStyles } from './button.styles';
import { ButtonSize, ButtonVariant, ButtonIntent } from './button.types';
import Loading from '../../assets/images/loading.svg';

@customElement('uds-button')
export class UDSButton extends LitElement {
  static override styles = [normalizeStyles, styles];

  /**
   * Specifies the variant of the button, used for customizing its appearance.
   */
  @property({ type: ButtonVariant }) variant = ButtonVariant.Primary;

  /**
   * Whether or not the button is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Specifies the intent of the button.
   */
  @property({ type: ButtonIntent }) intent = ButtonIntent.Accent;

  /**
   * Specifies the typography of the button.
   */
  @property({ type: ButtonSize }) size = ButtonSize.Medium;

  /**
   * The URL that the link button points to.
   */
  @property() href?: string;

  /**
   * Where to display the linked `href` URL for a link button. Common options
   * include `_blank` to open in a new tab.
   */
  @property() target?: string;

  /**
   * Whether to render the icon at the inline end of the label rather than the
   * inline start.
   *
   * _Note:_ Link buttons cannot have trailing icons.
   */
  @property({ type: Boolean, attribute: 'trailing-icon' }) trailingIcon = false;

  /**
   * Whether to display the icon or not.
   */
  @property({ type: Boolean, attribute: 'has-icon' }) hasIcon = false;

  /**
   * Theme used in selecting appropiate styles.
   */
  @property() theme: 'Light' | 'Dark' = 'Light';

  /**
   * Click handler used in handle clicking.
   */
  @property({ type: Function }) clickHandler = () => {};
  /**
   * The URL that the link button points to.
   */
  @property({ type: Boolean /* , attribute: false */ }) loading = false;

  /**
   * Specifies the type of button, used for controlling forms. When type
   * is `submit`, the containing form is submitted; when it is `reset` the
   * form is reset.
   */
  @property() type: '' | 'submit' | 'reset' = '';

  @queryAssignedElements({ slot: 'icon', flatten: true })
  private readonly assignedIcons!: HTMLElement[];

  override render() {
    // Link buttons may not be disabled
    const isDisabled = (this.disabled || this.loading) && !this.href;
    const isLoading = this.loading ? 'Loading' : '';
    const button = this.href ? literal`a` : literal`button`;

    console.log('Assigned Icons', this.assignedIcons);
    return staticHtml`
      <${button}
        id="Button"
        class="Button ${[
          this.theme,
          this.variant,
          this.intent,
          this.size,
          isLoading,
        ].join(' ')}"
        ?disabled=${isDisabled}
        href=${this.href || nothing}
        target=${this.target || nothing}
        @click="${this.handleClick}"
      >
      ${when(
        this.loading,
        () => html`<img class="LoadingIcon" src=${Loading} alt="Loading" />`,
        () => html``
      )}
        <slot name="label"></slot>
      </${button}>
    `;
  }

  private handleClick(event: MouseEvent) {
    event.preventDefault();
    this.clickHandler();
    console.log(this.clickHandler);
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-button': UDSButton;
  }
}
