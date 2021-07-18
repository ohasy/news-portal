import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '@/utils/updateObject';
import { StoreAction, NewsState } from '@/utils/types';

const initialState = {
  query: '',
  page: 1,
  newsList: [],
};

// Reducer Helper Functions

const addNewsInList = (state: NewsState, action: StoreAction) => {
  return updateObject(state, {
    page: state.page + 1,
    newsList: [...state.newsList, ...action.payload],
  });
};

const setNewsInList = (state: NewsState, action: StoreAction) => {
  return updateObject(state, {
    newsList: [...action.payload],
  });
};

const setQuery = (state: NewsState, action: StoreAction) => {
  return updateObject(state, {
    query: action.payload,
  });
};

const reducer = (state = initialState as NewsState, action: StoreAction) => {
  switch (action.type) {
    case actionTypes.ADD_NEWS_LIST:
      return addNewsInList(state, action);
    case actionTypes.SET_NEWS_LIST:
      return setNewsInList(state, action);
    case actionTypes.SET_QUERY:
      return setQuery(state, action);
    default:
      return state;
  }
};

export default reducer;
