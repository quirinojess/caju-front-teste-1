export type IThemeMain = {
  colors: {
    transparency: string;
    gradient: string;
    white: string;
    darkDeep: string;
    darkMedium: string;
    darkLight: string;
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    terciary: string;
    terciaryLight: string;
    failed: string;
    sucess: string;
  };
  typography: {
    primary: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    p: string;
    small: string;
    medium: string;
    large: string;
  };
  spacing: {
    verySmall: string;
    small: string;
    medium: string;
    large: string;
    veryLarge: string;
    extraLarge: string;
    big: string;
    mediumBig: string;
    veryBig: string;
    center: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
  proportions: {
    full: string;
    threeFourths: string;
    half: string;
    oneFourth: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
  shadows: {
  dark: string;
  green: string;
  };
  borders: {
    thin: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    veryShort: string;
    short: string;
    medium: string;
    long: string;
    extremeLong: string;
  };
  strokes: {
    thin: string;
    regular: string;
    bold: string;
    extraBold: string;
    black: string;
    extraBlack: string;
  };
}