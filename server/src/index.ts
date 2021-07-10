import * as express from 'express';
import { Request, Response } from 'express';

import * as dotenv from 'dotenv';

dotenv.config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});

app.listen(process.env.PORT, () => {
    console.log(
        process.env.NODE_ENV +
            ' server started at http://localhost:' +
            process.env.PORT
    );
});
