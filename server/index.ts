import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import menusRouter from './router/menuRouter.ts';
import mapRouter from './router/mapRouter.ts';

const app = express();
const PORT = 3001;
app.use(cors());

app.use('/menus', menusRouter);
app.use('/map', mapRouter);

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));