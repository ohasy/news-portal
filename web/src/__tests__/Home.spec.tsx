import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from './testUtils/test-utils';
import { Home } from '@/routes/Home';
import { newsResponse } from './testUtils/mocks/newsResponses';

describe('<Home /> ', () => {
  const server = setupServer(
    rest.post(`*/all-news`, (req, res, ctx) => {
      const response = newsResponse();
      return res(ctx.json(response));
    }),

    rest.post(`*/top-headlines`, (req, res, ctx) => {
      const response = newsResponse();
      return res(ctx.json(response));
    })
  );
  //   server.printHandlers();
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('should be able to search and show articles', async () => {
    render(<Home />);
    const textInput = screen.getByPlaceholderText(/Search text here/i);
    fireEvent.change(textInput, { target: { value: 'Text' } });
    await waitFor(
      () => {
        const articles = screen.getAllByTestId('clickable-article');

        expect(articles.length).toBe(1);
        expect(screen.getByTestId('article-title')).toHaveTextContent(
          /Mocked Article/i
        );
      },
      {
        timeout: 3000,
      }
    );
  });
});
