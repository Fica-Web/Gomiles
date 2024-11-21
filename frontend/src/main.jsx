import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './Store.js';
import Footer from './Components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>
        <App />
        <Footer />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)

