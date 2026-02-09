import { Controller } from '@nestjs/common';

export type JsonPlaceholderPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
@Controller('post')
export class PostController {}
