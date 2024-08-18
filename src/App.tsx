import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '~/components';
import { GlobalStyle, ThemeMain } from '~/themes';
import Router from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={ThemeMain}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
