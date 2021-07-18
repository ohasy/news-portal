import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import newsReducer from './reducers/newsReducer';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

type something = (someVar: any) => Promise<void>;

export type AppDispatch = something | typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
