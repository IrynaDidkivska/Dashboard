import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { MyContext, contexValue } from './context/MyContext';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <MyContext.Provider value={contexValue}>
        <App />
        <GlobalStyles />
        <ToastContainer autoClose={1800} />
      </MyContext.Provider>
    </BrowserRouter>
  </>
);
