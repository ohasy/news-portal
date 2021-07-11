import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/_global.scss';
import './styles/_typography.scss';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import registerServiceWorker from './serviceWorkerRegistration';
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
