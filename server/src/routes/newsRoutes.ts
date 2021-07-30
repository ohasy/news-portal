import { Router } from 'express';
import {
  getNewsController,
  getTopHeadlines,
} from '../controllers/newsCountrollers';

const router = Router();

router.post('/all-news', getNewsController);

router.post('/top-headlines', getTopHeadlines);
export default router;
