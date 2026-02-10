import express from 'express';
import { postRoutes } from './routes/postRoutes';

export const app = express();

app.use('/static', express.static('public'));

app.use(postRoutes);