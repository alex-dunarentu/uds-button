# UDS Button Component

## Overview

This repository contains a customizable and reusable button component built using `Typescript` and `Lit`, compatible with any framework or none at all.

Utilizing ShadowRoot, the button component ensures an encapsulated design system, safeguarding its integrity and enabling a harmonious coexistence with other elements. Additionally, `UDS` theme variables are incorporated using CSS built-in variables, granting the power to effortlessly control the appearance of the button based on the application's theme preferences.

For convenience, an index.html page is included within the repository which serves as a comprehensive showcase, providing an extensive array of button appearances directly derived from the Figma design, aiming to facilitate a seamless review of all possible button variations.

## Getting started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

```sh
git clone https://github.com/alex-dunarentu/uds-button.git
```

2. Install the necessary dependencies.

```sh
npm install
```

3. Build the project

```sh
npm run watch
```

4. Open a new terminal and start the project

```sh
npm run start
```

Visit `http://localhost:8080` in your browser to view the website

## Usage

Here are a couple of examples on how to use the component:

### As a button

```html
<uds-button theme="Light" variant="Primary" intent="Accent" size="Large">
  <span slot="label">Button</span>
</uds-button>
```

### As an anchor tag

```html
<uds-button href="/assets/images/forward.svg" target="_blank" theme="Light" variant="Primary" intent="Accent" size="Large">
  <span slot="label">Link</span>
</uds-button>
```

### With a left icon

```html
<uds-button theme="Light" variant="Primary" intent="Accent" size="Large">
  <img slot="leftIcon" src="/assets/images/forward.svg" alt="Button" />
  <span slot="label">Button</span>
</uds-button>
```

### With a right icon

```html
<uds-button theme="Light" variant="Primary" intent="Accent" size="Large">
  <span slot="label">Button</span>
  <img slot="rightIcon" src="/assets/images/forward.svg" alt="Button" />
</uds-button>
```

### As a form submit button

```html
<form onsubmit="handleSubmit(event)">
  <uds-button type="submit" theme="Light" variant="Primary" intent="Accent" size="Large">
    <span slot="label">Next</span>
  </uds-button>
</form>

<script>
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
  }
</script>
```

### As a form reset button

```html
<form onreset="handleReset(event)">
  <uds-button type="reset" theme="Light" variant="Primary" intent="Accent" size="Large">
    <span slot="label">Next</span>
  </uds-button>
</form>

<script>
  function handleReset(event) {
    event.preventDefault();
    console.log('Form reset');
  }
</script>
```

### With an onclick function

```html
<uds-button id="buttonElement" theme="Light" variant="Primary" intent="Accent" size="Large">
  <span slot="label">Next</span>
</uds-button>

<script>
  const buttonElement = document.getElementById('buttonElement');

  function handleClick() {
    console.log('Click event');
  }

  buttonElement.clickHandler = handleClick;
</script>
```

## Properties

`variant` (ButtonVariant): Specifies the variant of the button. Possible values include ButtonVariant.Primary, ButtonVariant.Secondary, ButtonVariant.Secondary-Outlined and ButtonVariant.Tertiary.

`disabled` (Boolean): Determines whether the button is disabled or not.

`intent` (ButtonIntent): Specifies the intent of the button. Possible values are ButtonIntent.Accent, ButtonIntent.Success, ButtonIntent.Warning and ButtonIntent.Danger.

`size` (ButtonSize): Specifies the size of the button. Options include ButtonSize.Small, ButtonSize.Medium and ButtonSize.Large.

`href` (String): The URL that the link button points to. When specified, the button acts as an anchor link.

`target` (String): Where to display the linked href URL for a link button. Common options include \_blank to open in a new tab.

`theme` ('Light' | 'Dark'): Determines whether the button is styled for 'Light' or 'Dark' theme.

`clickHandler` (Function): A custom click handler function for the button.

`loading` (Boolean): Determines whether to show the loading state of the button.

`type` ('' | 'submit' | 'reset'): Specifies the type of button, useful for controlling forms. When type is submit, the containing form is submitted, and when it is reset, the form is reset.

## Frameworks integration

Using Lit on older browsers will require loading polyfills for standard JavaScript features like Promises and async/await, the web components polyfills, as well as a polyfill-support script provided in the Lit package for interfacing Lit with the Web Components polyfills.

Polyfills for Web Components:

- @webcomponents/webcomponentsjs - Polyfills for custom elements, shadow DOM, template, and some newer DOM APIs
- lit/polyfill-support.js - A file that ships in the lit package that must be loaded when using webcomponentsjs

Example:

1. Build for production.

```sh
npm run build
```

2. Copy `app.bundle.js` and use the polyfills.

```html
<script src="@webcomponents/webcomponents-loader.js"></script>
<script src="lit/polyfill-support.js"></script>
<script src="app.bundle.js"></script>
```

3. Include a `UDS` theme like in [here](https://github.com/alex-dunarentu/uds-button/blob/main/src/assets/styles/themeMock.css).

## Optimizations

1. The implementation of minification for CSS string template literals from lit CSS in JS can significantly reduce the build output size by approximately 50% in this case.
2. In order to optimize the overall performance and efficiency, a strategic approach involves tailoring the theme and component properties to align with the preferences of the project and the development team. By carefully considering the team's coding style, design patterns, and architectural preferences, a streamlined development process and enhanced code maintainability can be achieved. Additionally, a judicious selection of component usage, incorporating only the necessary elements and avoiding unnecessary redundancies, can significantly improve the project's load times and overall user experience.
