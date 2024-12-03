import React from 'react';
import {useEffect} from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './Store.js';
import Footer from './Components/Footer/Footer.jsx';
import { initGA, logPageView } from "./analytics.js";

// Initialize Google Analytics on app load
initGA();

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(); // Log page views on route changes
  }, [location]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AnalyticsTracker />
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)

