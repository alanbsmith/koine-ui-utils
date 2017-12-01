# Koine UI Utils
_a library of common utils for [Koine](https://github.com/alanbsmith/koine)_

## Installation
This package is available on npm as koine-ui-utils, and you can find it [here](https://www.npmjs.com/package/koine-ui-utils).

To install the latest stable version with yarn:

```sh
$ yarn add koine-ui-utils
```

or with npm:

```sh
$ npm install koine-ui-utils --save
```

## Up & Running
To install dependencies with Yarn, run:
```sh
$ yarn
```

or to install with npm, run:

```sh
$ npm install
```
## Overview
There are three main exports
from this lib:
* `buildGlobalStyles()` - a function for building a global style string for styled-components `injectGlobal` function
* `constants` - an object containing helpful constants for style properties
* `theme` - an object containing all the attributes for our UI theme

### buildGlobalStyles()
Below is an example use of this function:

```javascript
```

### constants
The constants object looks like this:

```javascript
{
  fontWeights: {
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
}
```


### theme
The theme object look like this:

```javascript
{
  animations: {
    // css keyframes
    bounce
    slidedown
  },
  colors:
    base: {
      // graytones
      chrome000: STRING,
      chrome050: STRING,
      chrome100: STRING,
      chrome200: STRING,
      chrome300: STRING,
      chrome400: STRING,
      chrome500: STRING,
      chrome600: STRING,
      chrome700: STRING,
      chrome800: STRING,
      chrome900: STRING,

      // ui colors
      background: STRING,
      link: STRING,
      linkHover: STRING,
      linkVisited: STRING,
      overlay: STRING,
      shadow: STRING,
      shadowLight: STRING,
      text: STRING,
      textLight: STRING,
    },
    brand: {
      primary: STRING,
      secondary: STRING,
      tertiary: STRING,
      blue: STRING,
       purple: STRING,
      pink: STRING,
      orange: STRING,
      green: STRING,
      yellow: STRING,
    },
    status: {
      danger: STRING,
      default: STRING,
      info: STRING,
      success: STRING,
      warning: STRING,
    },
  },
  dimensions: {
    baseFontSize: NUMBER,
    basePad: NUMBER,
  },
  fonts: {
    primary: STRING,
    primaryFallback: STRING,
  },
}
```

## Local Development

### Module Development Workflow
Helpful information on development workflow in this library lives
 [here](https://gist.github.com/alanbsmith/6c581e5042b8e5e558b0b4454192eb69).

### Linting

To run the linter once:
```
$ yarn lint
```

To run the watch task:
```
$ yarn lint:watch
```

### Review
If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ npm run review
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/koine-ui-utils/blob/master/.github/CONTRIBUTING.md).

## License
[MIT](https://github.com/alanbsmith/koine-ui-utils/blob/master/LICENSE)
