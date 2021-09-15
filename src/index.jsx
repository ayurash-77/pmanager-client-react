import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import App from './app';

import translations from './translations';

import configureAppStore from './store/configureStore';

const store = configureAppStore();

const locale = JSON.parse(localStorage.getItem('locale')) || 'en';
localStorage.setItem('locale', JSON.stringify(locale));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale(locale));

const app = (
  <Suspense fallback="Loading...">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>
);

ReactDOM.render(app, document.getElementById('root'));
