import { Router } from 'express';
import { getNewsController } from '../controllers/newsCountrollers';

const router = Router();

router.post('/all-news', getNewsController);

export default router;
