import { Router } from 'express';
export const postRoutes = Router();

postRoutes.get('/post/:id', getPostPage);