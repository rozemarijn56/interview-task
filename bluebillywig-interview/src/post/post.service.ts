import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { handleAxiosCall } from 'src/error/catch-axios-errors';
import { Post } from 'src/Shared/Interfaces/post-interface';

dotenv.config();

const BASE_URL =
  process.env.JSONPLACEHOLDER_URL ||
  'https://jsonplaceholder.typicode.com';
@Injectable()
export class PostService {
  async getPostById(id: number): Promise<Post> {
      return handleAxiosCall(
        axios
          .get<Post>(`${BASE_URL}/posts/${id}`, { timeout: 5000 })
          .then(res => res.data),
        { postId: id }
      );
    }
}
