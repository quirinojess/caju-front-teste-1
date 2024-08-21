import { createGlobalStyle } from 'styled-components';
import { IThemeMain } from '../ThemeMain/types';

const GlobalStyles = createGlobalStyle<{ theme: IThemeMain }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    color:  ${(props) => props.theme.colors.darkDeep};
    background: ${(props) => props.theme.colors.white};
    margin: 0px;
  }

  ::selection {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }   
`;

export default GlobalStyles;
