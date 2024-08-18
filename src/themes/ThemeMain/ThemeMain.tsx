import { IThemeMain } from './types';

const ThemeMain: IThemeMain = {
  colors: {
    gradient:
      'linear-gradient(258deg, rgba(255, 117, 0, 1) 8%, rgba(232, 5, 55, 1) 53%)',
    transparency: 'rgba(51, 51, 51, 0.7)',
    white: '#f9f9f9',
    darkDeep: '#212121',
    darkMedium: '#9e9e9e',
    darkLight: '#e0e0e0',
    primary: '#E80537',
    primaryLight: '#FEDAE2',
    secondary: '#FF7500',
    secondaryLight: '#FDEDE1',
    terciary: '#59D359',
    terciaryLight: '#E1F7E1',
    failed: '#CE0432',
    sucess: '#299A29',
  },
  typography: {
    primary: "'Inter', sans-serif",
    h1: '1.3em',
    h2: '1em',
    h3: '0.8em',
    h4: '0.9em',
    p: '1em',
    small: '0.9em',
    medium: '1.1em',
    large: '2em',
  },
  spacing: {
    verySmall: '6px',
    small: '8px',
    medium: '12px',
    large: '24px',
    veryLarge: '40px',
    extraLarge: '48px',
    big: '56px',
    mediumBig: '72px',
    veryBig: '84px',
    center: '0 auto',
  },
  sizes: {
    small: '16px',
    medium: '64px;',
    large: '80px',
  },
  proportions: {
    full: '100%',
    threeFourths: '75%',
    half: '45%',
    oneFourth: '30%',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1900px',
  },
  shadows: {
    dark: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    green: 'inset 0 0 0 1px #007c89',
  },
  borders: {
    thin: '1px solid',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  transitions: {
    veryShort: '0.4s',
    short: '0.8s',
    medium: '2s',
    long: '4s',
    extremeLong: '32s',
  },
  strokes: {
    thin: '1',
    regular: '2',
    bold: '3',
    extraBold: '4',
    black: '5',
    extraBlack: '8',
  },
};

export default ThemeMain;
