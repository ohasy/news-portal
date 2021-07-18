import { Dispatch } from 'react';
import * as actionTypes from './actionTypes';
import { StoreAction, NewsRequestBody, StoreState } from '@/utils/types';
import { INewsApiResponse } from 'ts-newsapi/lib/types';

const fetchNewArticles = async (requestBody: NewsRequestBody) => {
  try {
    const rawResponse = await fetch(`${process.env.BASE_URL!}/all-news`, {
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const response: INewsApiResponse = await rawResponse.json();
    return response.articles;
  } catch (e) {
    console.log(e);
  }
};
export const searchNews =
  (query: string) =>
  async (dispatch: Dispatch<StoreAction>): Promise<void> => {
    const requestBody: NewsRequestBody = {
      query,
      page: 1,
    };
    const articles = await fetchNewArticles(requestBody);
    dispatch({
      type: actionTypes.SET_NEWS_LIST,
      payload: articles,
    });
  };

export const loadMore =
  () =>
  async (
    dispatch: Dispatch<StoreAction>,
    getState: () => StoreState
  ): Promise<void> => {
    const { news } = getState();
    const articles = await fetchNewArticles({
      query: news.query,
      page: news.page + 1,
    });
    dispatch({
      type: actionTypes.SET_NEWS_LIST,
      payload: articles,
    });
  };

export const setQuery = (query: string) => {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
};
