import { darken, rgba } from 'polished';

const chrome000 = '#FFFFFF';
const chrome300 = '#AFAFAF';
const chrome600 = '#646464';
const chrome800 = '#323232';
const chrome900 = '#191919';

const blue   = '#1FB6FF';
const pink   = '#FF49DB';
const purple = '#7E5BEF';
const yellow = '#FFC82C';

const colors = {
  base: {
    // graytones
    chrome000,
    chrome100: '#FAFAFA',
    chrome200: '#C8C8C8',
    chrome300,
    chrome400: '#969696',
    chrome500: '#7D7D7D',
    chrome600,
    chrome700: '#4B4B4B',
    chrome800,
    chrome900,
    // ui colors
    background: chrome000,
    link: blue,
    linkHover: darken(0.2, blue),
    linkVisited: darken(0.2, purple),
    overlay: rgba(chrome900, 0.85),
    shadow: rgba(chrome600, 0.4),
    shadowLight: rgba(chrome600, 0.2),
    text: chrome800,
    textLight: chrome600,
  },
  brand: {
    primary: '#7E5BEF',
    secondary: '#FFC82C',
    tertiary: '#FF49DB',
    blue,
    green: '#13CE66',
    orange: '#FF7849',
    pink,
    purple,
    yellow,
  },
  status: {
    danger: '#FF4949',
    default: chrome300,
    info: '#1FB6FF',
    success: '#13CE66',
    warning: '#FFC82C',
  },
};

export default colors;
