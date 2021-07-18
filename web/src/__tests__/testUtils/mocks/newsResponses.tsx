import { INewsApiResponse } from 'ts-newsapi/lib/types';
export const newsResponse = (): INewsApiResponse => ({
  articles: [
    {
      author: 'yash',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta culpa sunt, maiores consequuntur obcaecati odit mollitia unde reiciendis ullam fugit dolorum in, optio sed minima facere harum voluptate accusamus.`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit enim ipsam provident qui praesentium nam doloribus. Ea ipsa consectetur dolorem laboriosam at minima suscipit sit, rem, quas minus deserunt!`,
      publishedAt: 'Date',
      source: {
        id: 'ASd',
        name: 'asdasd',
      },
      title: 'Mocked Article',
      url: 'Asdasd',
      urlToImage: 'Asdsad',
    },
  ],
  status: 'ok',
  totalResults: 10,
  code: '200',
});
