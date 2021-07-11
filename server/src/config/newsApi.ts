import NewsAPI from 'ts-newsapi';
import { INewsApiEverythingParams } from 'ts-newsapi/lib/types';
export let newsApi: NewsAPI = null;

export const init = () => {
  newsApi = new NewsAPI(process.env.NEWS_API_KEY);
};

export { INewsApiEverythingParams };
