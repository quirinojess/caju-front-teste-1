import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeMain, GlobalStyle } from '../src/themes';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { StatusProvider } from '../src/contexts/StatusContext';

const GlobalStyles = GlobalStyle;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (StoryFn: () => JSX.Element) => (
      <ThemeProvider theme={ThemeMain}>
        <StatusProvider>
          <StoryFn />
        </StatusProvider>
      </ThemeProvider>
    ),
    withThemeFromJSXProvider({
      themes: {
        ThemeMain,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
