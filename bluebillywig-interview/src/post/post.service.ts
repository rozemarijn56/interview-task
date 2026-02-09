import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import type { JsonPlaceHolderPost } from 'src/Shared/type';

@Injectable()
export class PostService {
  constructor(private readonly http: HttpService) {}

  async getPostById(id: number): Promise<JsonPlaceHolderPost> {
    try {
      const res = await firstValueFrom(
        this.http.get<JsonPlaceHolderPost>(`https://jsonplaceholder.typicode.com/posts/${id}`),
      );
      if (!res.data?.id) throw new NotFoundException('Post not found');
      return res.data;
    } catch (e) {
      throw new NotFoundException('Post not found');
    }
  }
}
