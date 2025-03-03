import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import menusRouter from './router/menuRouter.ts';
import mapRouter from './router/mapRouter.ts';
import mongoose from 'mongoose';

const app = express();
const PORT = 3001;

mongoose
.connect(process.env.MONGO_URI as string)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error: ", err));

app.use(cors());

app.use('/menus', menusRouter);
app.use('/map', mapRouter);

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));