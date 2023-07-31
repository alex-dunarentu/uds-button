import { css } from 'lit';

const accentStyles = css`
  /* Primary */
  .Button.Light.Primary.Accent > .Background {
    background-color: var(--light-surface-accent);
    background-image: var(--light-utility-border-gradient-on-accent);
  }

  .Button.Dark.Primary.Accent > .Background {
    background-color: var(--dark-surface-accent);
    background-image: var(--dark-utility-border-gradient-on-accent);
  }

  .Button.Light.Primary.Accent > .Foreground {
    background-color: var(--light-surface-accent);
    color: var(--light-tint-on-accent);
  }

  .Button.Dark.Primary.Accent > .Foreground {
    background-color: var(--dark-surface-accent);
    color: var(--dark-tint-on-accent);
  }

  /* Secondary */
  .Button.Light.Secondary.Accent > .Background {
    background-color: var(--light-surface-elevation);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary.Accent > .Background {
    background-color: var(--dark-surface-elevation);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary.Accent > .Foreground {
    background-color: var(--light-surface-elevation);
    color: var(--light-tint-primary);
  }

  .Button.Dark.Secondary.Accent > .Foreground {
    background-color: var(--dark-surface-elevation);
    color: var(--dark-tint-primary);
  }

  /* Secondary-Outlined */
  .Button.Light.Secondary-Outlined.Accent > .Background {
    background-color: var(--light-surface-translucent);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary-Outlined.Accent > .Background {
    background-color: var(--dark-surface-translucent);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary-Outlined.Accent > .Foreground {
    background-color: var(--light-surface-translucent);
    color: var(--light-tint-primary);
  }

  .Button.Dark.Secondary-Outlined.Accent > .Foreground {
    background-color: var(--dark-surface-translucent);
    color: var(--dark-tint-primary);
  }

  /* Tertiary */
  .Button.Light.Tertiary.Accent > .Foreground {
    color: var(--light-tint-action);
  }

  .Button.Dark.Tertiary.Accent > .Foreground {
    color: var(--dark-tint-action);
  }

  /* Universal */
  .Button.Light.Accent:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-hover);
  }

  .Button.Dark.Accent:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-hover);
  }

  .Button.Light.Accent:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-pressed);
  }

  .Button.Dark.Accent:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-pressed);
  }
`;

const infoStyles = css`
  /* Primary */
  .Button.Light.Primary.Info > .Background {
    background-color: var(--light-solid-info);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Primary.Info > .Background {
    background-color: var(--dark-solid-info);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Primary.Info > .Foreground {
    background-color: var(--light-solid-info);
    color: var(--light-tint-on-solid);
  }

  .Button.Dark.Primary.Info > .Foreground {
    background-color: var(--dark-solid-info);
    color: var(--dark-tint-on-solid);
  }

  .Button.Light.Primary.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-tint-on-solid);
    opacity: 0.12;
  }

  .Button.Dark.Primary.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-tint-on-solid);
    opacity: 0.12;
  }

  .Button.Light.Primary.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-tint-on-solid);
    opacity: 0.25;
  }

  .Button.Dark.Primary.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-tint-on-solid);
    opacity: 0.25;
  }

  /* Secondary */
  .Button.Light.Secondary.Info > .Background {
    background-color: var(--light-surface-info);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary.Info > .Background {
    background-color: var(--dark-surface-info);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary.Info > .Foreground {
    background-color: var(--light-surface-info);
    color: var(--light-tint-on-info);
  }

  .Button.Dark.Secondary.Info > .Foreground {
    background-color: var(--dark-surface-info);
    color: var(--dark-tint-on-info);
  }

  .Button.Light.Secondary.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-tint-on-info);
    opacity: 0.12;
  }

  .Button.Dark.Secondary.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-tint-on-info);
    opacity: 0.12;
  }

  .Button.Light.Secondary.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-tint-on-info);
    opacity: 0.25;
  }

  .Button.Dark.Secondary.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-tint-on-info);
    opacity: 0.25;
  }

  /* Secondary-Outlined */
  .Button.Light.Secondary-Outlined.Info > .Background {
    background-color: var(--light-surface-translucent);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary-Outlined.Info > .Background {
    background-color: var(--dark-surface-translucent);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary-Outlined.Info > .Foreground {
    background-color: var(--light-surface-translucent);
    color: var(--light-tint-on-info);
  }

  .Button.Dark.Secondary-Outlined.Info > .Foreground {
    background-color: var(--dark-surface-translucent);
    color: var(--dark-tint-on-info);
  }

  .Button.Light.Secondary-Outlined.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-hover);
  }

  .Button.Dark.Secondary-Outlined.Info:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-hover);
  }

  .Button.Light.Secondary-Outlined.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-pressed);
  }

  .Button.Dark.Secondary-Outlined.Info:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-pressed);
  }
`;

const dangerStyles = css`
  /* Primary */
  .Button.Light.Primary.Danger > .Background {
    background-color: var(--light-solid-danger);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Primary.Danger > .Background {
    background-color: var(--dark-solid-danger);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Primary.Danger > .Foreground {
    background-color: var(--light-solid-danger);
    color: var(--light-tint-on-solid);
  }

  .Button.Dark.Primary.Danger > .Foreground {
    background-color: var(--dark-solid-danger);
    color: var(--dark-tint-on-solid);
  }

  .Button.Light.Primary.Danger:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.12;
  }

  .Button.Dark.Primary.Danger:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.12;
  }

  .Button.Light.Primary.Danger:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.25;
  }

  .Button.Dark.Primary.Danger:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.25;
  }

  /* Secondary */
  .Button.Light.Secondary.Danger > .Background {
    background-color: var(--light-surface-danger);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary.Danger > .Background {
    background-color: var(--dark-surface-danger);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary.Danger > .Foreground {
    background-color: var(--light-surface-danger);
    color: var(--light-tint-on-danger);
  }

  .Button.Dark.Secondary.Danger > .Foreground {
    background-color: var(--dark-surface-danger);
    color: var(--dark-tint-on-danger);
  }

  .Button.Light.Secondary.Danger:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.12;
  }

  .Button.Dark.Secondary.Danger:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.12;
  }

  .Button.Light.Secondary.Danger:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.25;
  }

  .Button.Dark.Secondary.Danger:active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-solid-danger);
    opacity: 0.25;
  }

  /* Secondary-Outlined */
  .Button.Light.Secondary-Outlined.Danger > .Background {
    background-color: var(--light-surface-translucent);
    background-image: var(--light-utility-border-outlined-button);
  }

  .Button.Dark.Secondary-Outlined.Danger > .Background {
    background-color: var(--dark-surface-translucent);
    background-image: var(--dark-utility-border-outlined-button);
  }

  .Button.Light.Secondary-Outlined.Danger > .Foreground {
    background-color: var(--light-surface-translucent);
    color: var(--light-solid-danger);
  }

  .Button.Dark.Secondary-Outlined.Danger > .Foreground {
    background-color: var(--dark-surface-translucent);
    color: var(--light-solid-danger);
  }

  /* Tertiary */
  .Button.Light.Tertiary.Danger > .Foreground {
    color: var(--light-solid-danger);
  }

  .Button.Dark.Tertiary.Danger > .Foreground {
    color: var(--light-solid-danger);
  }

  /* Universal */
  .Button.Light.Danger:not(.Primary):not(.Secondary):hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-hover);
  }

  .Button.Dark.Danger:not(.Primary):not(.Secondary):hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-hover);
  }

  .Button.Light.Danger:not(.Primary):not(.Secondary):active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-pressed);
  }

  .Button.Dark.Danger:not(.Primary):not(.Secondary):active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-utility-state-button-pressed);
  }
`;

export const styles = css`
  .Button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Normalize styles */
    font-family: var(--custom-font);
    letter-spacing: -1px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    text-transform: none;
  }

  .Button > .Background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .Button > .Foreground {
    border: 1px solid transparent;
    background-clip: padding-box; /*  This makes sure the background doesn't show under the border */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .Button.Large > .Background {
    border-radius: var(--button-border-radius-large);
  }

  .Button.Medium > .Background {
    border-radius: var(--button-border-radius-medium);
  }

  .Button.Small > .Background {
    border-radius: var(--button-border-radius-small);
  }

  .Button.Large > .Foreground {
    padding: var(--button-padding-large);
    font-size: var(--button-font-size-large);
    line-height: var(--button-line-height-large);
    border-radius: var(--button-border-radius-large);
  }

  .Button.Medium > .Foreground {
    padding: var(--button-padding-medium);
    font-size: var(--button-font-size-medium);
    line-height: var(--button-line-height-medium);
    border-radius: var(--button-border-radius-medium);
  }

  .Button.Small > .Foreground {
    padding: var(--button-padding-small);
    font-size: var(--button-font-size-small);
    line-height: var(--button-line-height-small);
    border-radius: var(--button-border-radius-small);
  }

  .Button.Light:focus > .Background {
    box-shadow: 0px 0px 0px 2px var(--light-surface-background), 0px 0px 0px 5px var(--light-utility-state-focus-outline);
  }

  .Button.Dark:focus > .Background {
    box-shadow: 0px 0px 0px 2px var(--dark-surface-background), 0px 0px 0px 5px var(--dark-utility-state-focus-outline);
  }

  .Button.Large:hover:before,
  .Button.Large:active:before,
  .Button.Large:disabled:before {
    border-radius: var(--button-border-radius-large);
  }

  .Button.Medium:hover:before,
  .Button.Medium:active:before,
  .Button.Medium:disabled:before {
    border-radius: var(--button-border-radius-medium);
  }

  .Button.Small:hover:before,
  .Button.Small:active:before,
  .Button.Small:disabled:before {
    border-radius: var(--button-border-radius-small);
  }

  #Button:disabled {
    pointer-events: none;
    user-select: none;
  }

  #Button:not(.Accent):disabled > .Foreground {
    color: var(--light-tint-primary);
  }

  #Button:not(.Secondary-Outlined):not(.Tertiary):disabled > .Background {
    background: var(--light-utility-state-disabled);
  }

  #Button:not(.Secondary-Outlined):not(.Tertiary):disabled > .Foreground {
    background: var(--light-utility-state-disabled);
    opacity: 0.5;
  }

  #Button.Secondary-Outlined:not(.Loading):disabled,
  #Button.Tertiary:not(.Loading):disabled {
    opacity: 0.25;
  }

  #Button.Secondary-Outlined.Loading > .Background,
  #Button.Tertiary.Loading > .Background {
    background: var(--light-utility-state-disabled);
  }

  #Button.Secondary-Outlined.Loading > .Foreground,
  #Button.Tertiary.Loading > .Foreground {
    background: var(--light-utility-state-disabled);
    opacity: 0.5;
  }

  #Button .LoadingIcon {
    width: 24px;
    height: 24px;
    position: absolute;
    animation: spin 1.5s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  #Button.Loading slot {
    visibility: hidden;
  }

  ::slotted(*) {
    outline: none;
  }

  ${accentStyles}
  ${infoStyles}
  ${dangerStyles}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
