import { ChangeEvent, Dispatch } from 'react';
import { INewsApiArticle } from 'ts-newsapi/lib/types';
export type ReactChangeEvent = ChangeEvent<HTMLInputElement>;

export type NewsRequestBody = {
  query: string;
  page?: number;
};
export type StoreAction = {
  type: string;
  payload?: any;
};

export type NewsState = {
  newsList: INewsApiArticle[];
  page: number;
  query: string;
};
export type StoreState = {
  news: NewsState;
};
