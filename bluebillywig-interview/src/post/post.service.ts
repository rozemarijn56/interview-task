import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { Post } from './mediaclip/post-mediaclip.service';
import { handleax}
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
