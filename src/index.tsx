import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_en from './locales/en/translation.json';
import global_es from './locales/es/translation.json';
import global_fr from './locales/fr/translation.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      global: global_en, // 'common' is our custom namespace
    },
    es: { global: global_es },
    fr: { global: global_fr },
  },
});

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <I18nextProvider  i18n={i18next}>
      <App />
      </I18nextProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
