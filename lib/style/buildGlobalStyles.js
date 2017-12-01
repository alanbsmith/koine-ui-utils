import fontWeights from './fontWeights';

function buildGlobalStyles(theme) {
  return `
  html {
    height: 100%;
  }

  body {
    background-color: ${theme.colors.base.background};
    color: ${theme.colors.base.text};
    font-family: ${theme.fonts.primaryFallback};
    font-size: ${theme.dimensions.baseFontSize}px;
    font-weight: ${fontWeights.light};
    height: 100%;
    margin: 0;
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: ${theme.fonts.primaryFallback};
      outline: none;
    }

    #root {
      height: 100%;

      > * {
        height: 100%;
      }

    }
  }
  `;
}

export default buildGlobalStyles;
