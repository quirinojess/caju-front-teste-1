import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '~/components';
import { GlobalStyles, ThemeMain } from '~/themes';
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatusProvider } from './contexts/StatusContext/StatusContext';

function App() {
  const basePath = import.meta.env.VITE_API_URL;

  return (
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>
        <GlobalStyles />
        <BrowserRouter basename={basePath}>
          <Header />
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </StatusProvider>
    </ThemeProvider>
  );
}

export default App;
