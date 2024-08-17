import { createGlobalStyle } from "styled-components";
import { IThemeMain } from "../ThemeMain/types";

const GlobalStyle = createGlobalStyle<{ theme: IThemeMain }>`
  body {
    font-family: ${props => props.theme.typography.primary};
    background: ${props => props.theme.colors.white}; 
  }
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }   
`;

export default GlobalStyle;
