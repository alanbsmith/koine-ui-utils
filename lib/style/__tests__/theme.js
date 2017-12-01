import theme from '../theme';

describe('Theme', () => {
  it('contains the correct base colors', () => {
    const {
      chrome000,
      chrome100,
      chrome200,
      chrome300,
      chrome400,
      chrome500,
      chrome600,
      chrome700,
      chrome800,
      chrome900,
      background,
      link,
      linkHover,
      linkVisited,
      overlay,
      shadow,
      shadowLight,
      text,
      textLight,
    } = theme.colors.base;

    expect(chrome000).toBe('#FFFFFF');
    expect(chrome100).toBe('#FAFAFA');
    expect(chrome200).toBe('#C8C8C8');
    expect(chrome300).toBe('#AFAFAF');
    expect(chrome400).toBe('#969696');
    expect(chrome500).toBe('#7D7D7D');
    expect(chrome600).toBe('#646464');
    expect(chrome700).toBe('#4B4B4B');
    expect(chrome800).toBe('#323232');
    expect(chrome900).toBe('#191919');
    expect(background).toBe('#FFFFFF');
    expect(link).toBe('#1FB6FF');
    expect(linkHover).toBe('#007cb8');
    expect(linkVisited).toBe('#4114d0');
    expect(overlay).toBe('rgba(25,25,25,0.85)');
    expect(shadow).toBe('rgba(100,100,100,0.4)');
    expect(shadowLight).toBe('rgba(100,100,100,0.2)');
    expect(text).toBe('#323232');
    expect(textLight).toBe('#646464');
  });

  it('contains the correct brand colors', () => {
    const {
      primary,
      secondary,
      tertiary,
      blue,
      green,
      orange,
      pink,
      purple,
      yellow,
    } = theme.colors.brand;

    expect(primary).toBe('#7E5BEF');
    expect(secondary).toBe('#FFC82C');
    expect(tertiary).toBe('#FF49DB');
    expect(blue).toBe('#1FB6FF');
    expect(green).toBe('#13CE66');
    expect(orange).toBe('#FF7849');
    expect(pink).toBe('#FF49DB');
    expect(purple).toBe('#7E5BEF');
    expect(yellow).toBe('#FFC82C');
  });

  it('contains the correct status colors', () => {
    const {
      danger,
      info,
      success,
      warning,
    } = theme.colors.status;

    expect(danger).toBe('#FF4949');
    expect(theme.colors.status.default).toBe('#AFAFAF');
    expect(info).toBe('#1FB6FF');
    expect(success).toBe('#13CE66');
    expect(warning).toBe('#FFC82C');
  });

  it('contains the correct dimensions', () => {
    const { baseFontSize, basePad } = theme.dimensions;
    expect(baseFontSize).toBe(16);
    expect(basePad).toBe(8);
  });

  it('contains the correct fonts', () => {
    const { primary, primaryFallback } = theme.fonts;
    expect(primary).toBe('Open Sans');
    expect(primaryFallback).toBe('Helvetica, Arial, sans-serif');
  });
});
