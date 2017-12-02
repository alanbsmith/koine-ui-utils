import theme from '../theme';

describe('Theme', () => {
  it('contains the correct base colors', () => {
    expect(theme.colors.base).toEqual({
      chrome000: '#FFFFFF',
      chrome100: '#FAFAFA',
      chrome200: '#C8C8C8',
      chrome300: '#AFAFAF',
      chrome400: '#969696',
      chrome500: '#7D7D7D',
      chrome600: '#646464',
      chrome700: '#4B4B4B',
      chrome800: '#323232',
      chrome900: '#191919',
      background: '#FFFFFF',
      link: '#1FB6FF',
      linkHover: '#007cb8',
      linkVisited: '#4114d0',
      overlay: 'rgba(25,25,25,0.85)',
      shadow: 'rgba(100,100,100,0.4)',
      shadowLight: 'rgba(100,100,100,0.2)',
      text: '#323232',
      textLight: '#646464',
    });
  });

  it('contains the correct brand colors', () => {
    expect(theme.colors.brand).toEqual({
      primary: '#7E5BEF',
      secondary: '#FFC82C',
      tertiary: '#FF49DB',
      blue: '#1FB6FF',
      green: '#13CE66',
      orange: '#FF7849',
      pink: '#FF49DB',
      purple: '#7E5BEF',
      yellow: '#FFC82C',
    });
  });

  it('contains the correct status colors', () => {
    expect(theme.colors.status).toEqual({
      danger: '#FF4949',
      default: '#AFAFAF',
      info: '#1FB6FF',
      success: '#13CE66',
      warning: '#FFC82C',
    });
  });

  it('contains the correct dimensions', () => {
    expect(theme.dimensions).toEqual({
      baseFontSize: 16,
      basePad: 8,
    });
  });

  it('contains the correct fonts', () => {
    expect(theme.fonts).toEqual({
      primary: 'Open Sans',
      primaryFallback: 'Helvetica, Arial, sans-serif',
    });
  });

  it('contains the correct fontWeights', () => {
    expect(theme.fontWeights).toEqual({
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
    });
  });
});
