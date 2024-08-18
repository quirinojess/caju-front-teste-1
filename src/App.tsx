import { ThemeProvider } from "styled-components";
import Router from "~/router";
import { Header } from "~/components";
import { GlobalStyle, ThemeMain } from "~/themes";

function App() {
 return (
  <ThemeProvider theme={ThemeMain}>
   <GlobalStyle />
   <Header />
   <Router />
  </ThemeProvider>
 );
}

export default App;
