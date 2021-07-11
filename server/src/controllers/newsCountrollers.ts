import { Request, Response } from 'express';
import { newsApi } from '../config/newsApi';

interface CustomRequest<T> extends Request {
  body: T;
}
type RequestBody = {
  query: string;
  page: number;
};
export const getNewsController = async (
  req: CustomRequest<RequestBody>,
  res: Response
) => {
  console.log(req.body);
  const { query, page } = req.body;
  const response = await newsApi.getEverything({
    q: query,
    page: Number(page),
    pageSize: 20,
    sortBy: 'publishedAt',
    language: 'en',
  });
  console.log(response);
  res.status(200).json(response);
};
