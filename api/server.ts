import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { cards } from './data.db';
import bodyParser from 'body-parser';

const PORT = 3333;
const data = cards;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
