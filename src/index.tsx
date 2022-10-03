import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import rootReducer from './store/index';

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
