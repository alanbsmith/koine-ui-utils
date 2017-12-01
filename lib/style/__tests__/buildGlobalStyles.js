import buildGlobalStyles from '../buildGlobalStyles';
import theme from '../theme';

const mockGlobalStyles = (
  `
  html {
    height: 100%;
  }

  body {
    background-color: #FFFFFF;
    color: #323232;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    height: 100%;
    margin: 0;
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: Helvetica, Arial, sans-serif;
      outline: none;
    }

    #root {
      height: 100%;

      > * {
        height: 100%;
      }

    }
  }
  `
);

describe('buildGlobalStyles()', () => {
  it('contains the correct styles', () => {
    const globalStyles = buildGlobalStyles(theme);
    expect(globalStyles).toBe(mockGlobalStyles);
  });
});
