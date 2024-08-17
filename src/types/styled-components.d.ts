import 'styled-components';
import { IThemeMain } from '~/themes/ThemeMain/types';	

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeMain {}
}
