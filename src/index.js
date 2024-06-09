// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { NewsProvider } from './contexts/NewsContext';

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
