import express from 'express';
import cors from 'cors';
import menusRouter from './router/router.js';
import 'dotenv/config';

const app = express();
const PORT = 3001;
app.use(cors());

app.use('/menus', menusRouter);

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));