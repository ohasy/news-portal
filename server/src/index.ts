import * as express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as newsApi from './config/newsApi';
import newsRoutes from './routes/newsRoutes';
import { readFileSync } from 'fs';
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';

const envConfig = dotenv.parse(readFileSync(envFile));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
(async () => {
  newsApi.init();
  app.get('/', (req: Request, res: Response) => {
    res.send({
      message: 'hello world',
    });
  });

  app.use(newsRoutes);
  app.listen(process.env.PORT, () => {
    console.log(
      process.env.NODE_ENV ||
        'development' +
          ' server started at http://localhost:' +
          process.env.PORT
    );
  });
})().catch((err) => {
  console.log(err);
});
