import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '~/components';
import { GlobalStyle, ThemeMain } from '~/themes';
import Router from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatusProvider } from './contexts/StatusContext';

function App() {
  return (
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </StatusProvider>
    </ThemeProvider>
  );
}

export default App;
