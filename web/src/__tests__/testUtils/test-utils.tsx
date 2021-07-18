// test-utils.jsx
import 'whatwg-fetch'; // for fetch
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '@/store/reducers/newsReducer';
import { StoreState } from '@/utils/types';

const rootReducer = (initialState: StoreState) =>
  combineReducers({
    news: initialState?.news
      ? newsReducer.bind(null, initialState.news)
      : newsReducer,
  });

const store = (initialState: StoreState) =>
  createStore(rootReducer(initialState), compose(applyMiddleware(thunk)));

function render(
  ui: React.ReactElement,
  { preloadedState, ...renderOptions } = {} as any
) {
  function Wrapper({ children }: any) {
    return (
      <Provider store={store(preloadedState)}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
