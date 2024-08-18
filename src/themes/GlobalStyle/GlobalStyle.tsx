import { createGlobalStyle } from 'styled-components';
import { IThemeMain } from '../ThemeMain/types';

const GlobalStyle = createGlobalStyle<{ theme: IThemeMain }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.colors.white};
    margin: 0px;
  }

  ::selection {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }   
`;

export default GlobalStyle;
