import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyles } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </>
);
