import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/_global.scss';
import './styles/_typography.scss';
import store from './store/store';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import registerServiceWorker from '@/serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

reportWebVitals(console.log);
