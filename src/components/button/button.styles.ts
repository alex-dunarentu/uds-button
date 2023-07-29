import { css } from 'lit';

const accentStyles = css`
  .Button.Light.Primary.Accent {
    background: var(--light-background-primary);
    color: var(--light-color-primary);
    box-shadow: var(--light-box-shadow-primary);
  }

  .Button.Light.Primary.Accent:focus {
    box-shadow: var(--light-box-shadow-primary), 0px 0px 0px 2px #fff,
      0px 0px 0px 5px rgba(0, 143, 168, 0.4) !important;
  }

  .Button.Light.Secondary.Accent {
    background: var(--light-background-secondary);
    color: var(--light-color-secondary);
    box-shadow: var(--light-box-shadow-secondary);
  }

  .Button.Light.Secondary.Accent:focus {
    box-shadow: var(--light-box-shadow-secondary), 0px 0px 0px 2px #fff,
      0px 0px 0px 5px rgba(0, 143, 168, 0.4) !important;
  }

  .Button.Light.Secondary-Outlined.Accent {
    background: var(--light-background-secondary_outlined);
    color: var(--light-color-secondary_outlined);
    box-shadow: var(--light-box-shadow-secondary_outlined);
  }

  .Button.Light.Secondary-Outlined.Accent:focus {
    box-shadow: var(--light-box-shadow-secondary_outlined), 0px 0px 0px 2px #fff,
      0px 0px 0px 5px rgba(0, 143, 168, 0.4) !important;
  }

  .Button.Light.Tertiary.Accent {
    background: var(--light-background-tertiary);
    color: var(--light-color-tertiary);
    box-shadow: var(--light-box-shadow-tertiary);
  }

  .Button.Light.Tertiary.Accent:focus {
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 5px rgba(0, 143, 168, 0.4) !important;
  }
`;

export const styles = css`
  .Button {
    --padding-large: 16px;
    --font-size-large: 16px;
    --line-height-large: 16px;
    --border-radius-large: 12px;

    --padding-medium: 12px 16px;
    --font-size-medium: 14px;
    --line-height-medium: 16px;
    --border-radius-medium: 8px;

    --padding-small: 8px 12px;
    --font-size-small: 14px;
    --line-height-small: 16px;
    --border-radius-small: 8px;

    --light-box-shadow-accent: inset 0 0 0 1px var(--light-border-accent);

    --light-color-primary: var(--light-tint-accent);
    --light-background-primary: var(--light-surface-accent);
    --light-box-shadow-primary: var(--light-box-shadow-accent);

    --light-color-secondary: var(--light-tint-accent);
    --light-background-secondary: var(--light-surface-elevation);
    --light-box-shadow-secondary: var(--light-box-shadow-accent);

    --light-color-secondary_outlined: var(--light-tint-accent);
    --light-background-secondary_outlined: var(--light-surface-translucent);
    --light-box-shadow-secondary_outlined: var(--light-box-shadow-accent);

    --light-color-tertiary: var(--light-tint-action);
    --light-background-tertiary: var(--light-surface-translucent);
    --light-box-shadow-tertiary: none;

    cursor: pointer;
    outline: none;
    border: none;
    user-select: none;
    overflow: hidden;
    font-family: var(--custom-font);
    letter-spacing: -1px;
    font-weight: 600;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Button.Large {
    padding: var(--padding-large);
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    border-radius: var(--border-radius-large);
  }

  .Button.Medium {
    padding: var(--padding-medium);
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
    border-radius: var(--border-radius-medium);
  }

  .Button.Small {
    padding: var(--padding-small);
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
    border-radius: var(--border-radius-small);
  }

  #Button:hover::before,
  #Button:active::before {
    content: '';
    position: absolute;
    top: -0;
    left: -0;
    width: 100%;
    height: 100%;
    background: var(--light-utility-state-button-hover);
    z-index: 1;
  }

  #Button:active::before {
    background: var(--light-utility-state-button-pressed);
  }

  #Button:disabled {
    opacity: 0.5;
    background: var(--light-utility-state-button-disabled);
    box-shadow: none;
    pointer-events: none;
  }

  #Button.Loading {
    opacity: 1;
  }

  #Button.Loading > slot {
    visibility: hidden;
  }

  #Button > .LoadingIcon {
    width: 24px;
    height: 24px;
    position: absolute;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${accentStyles}
`;

export const normalizeStyles = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
   ========================================================================== */

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
  }

  /**
   * Render the main element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on h1 elements within section and
   * article contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent sub and sup elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from fieldset elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    fieldset elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to inherit in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }
`;
