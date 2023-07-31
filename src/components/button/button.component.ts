import { LitElement, html, nothing } from 'lit';
import { html as staticHtml, literal } from 'lit/static-html.js';
import { when } from 'lit/directives/when.js';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './button.styles';
import { ButtonSize, ButtonVariant, ButtonIntent } from './button.types';
import Loading from '../../assets/images/loading.svg';

@customElement('uds-button')
export class UDSButton extends LitElement {
  static override styles = styles;

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
   * Whether to display the button for 'Light' or 'Dark' theme.
   */
  @property() theme: 'Light' | 'Dark' = 'Light';

  /**
   * Click handler used in handle click event.
   */
  @property({ type: Function }) clickHandler = () => {};

  /**
   * Whether to show the loading state of the button.
   */
  @property({ type: Boolean /* , attribute: false */ }) loading = false;

  /**
   * Specifies the type of button, used for controlling forms. When type
   * is `submit`, the containing form is submitted; when it is `reset` the
   * form is reset.
   */
  @property() type: '' | 'submit' | 'reset' = '';

  override render() {
    const isDisabled = (this.disabled || this.loading) && !this.href;
    const isLoading = this.loading ? 'Loading' : '';
    const button = this.href ? literal`a` : literal`button`;

    return staticHtml`
      <${button}
        id="Button"
        class="Button ${[this.theme, this.variant, this.intent, this.size, isLoading].join(' ')}"
        ?disabled=${isDisabled}
        type=${this.type || nothing}
        href=${this.href || nothing}
        target=${this.target || nothing}
        @click="${this.handleClick}"
      >
        ${when(
          this.loading,
          () => html`<img class="LoadingIcon" src=${Loading} alt="Loading" />`,
          () => html``
        )}
        <div class="Background"></div>
        <div class="Foreground">
          <slot name="leftIcon"></slot>
          <slot name="label"></slot>
          <slot name="rightIcon"></slot>
        </div>
      </${button}>
    `;
  }

  override firstUpdated() {
    this.checkSlots();
  }

  private checkSlots() {
    const leftIconSlot = this.shadowRoot!.querySelector('slot[name="leftIcon"]') as HTMLSlotElement;
    const rightIconSlot = this.shadowRoot!.querySelector('slot[name="rightIcon"]') as HTMLSlotElement;

    const leftIcon = leftIconSlot.assignedNodes({ flatten: true })[0] as HTMLElement;
    const rightIcon = rightIconSlot.assignedNodes({ flatten: true })[0] as HTMLElement;

    if (leftIcon && rightIcon) {
      leftIconSlot.style.display = 'none';
      rightIconSlot.style.display = 'none';
      throw new Error('Only one icon can be used in either leftIcon or rightIcon slot of the button');
    }
  }

  private handleClick() {
    if (!this.type) {
      this.clickHandler();
    } else {
      const form = this.closest('form') as HTMLFormElement | null;
      if (form) {
        if (this.type === 'submit') {
          form.requestSubmit();
        } else if (this.type === 'reset') {
          form.reset();
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-button': UDSButton;
  }
}
