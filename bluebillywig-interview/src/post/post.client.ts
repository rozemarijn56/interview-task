import axios from 'axios';
import { Post } from './post.types';
import dotenv from 'dotenv';
import { catchAxiosErrors, PostNotFoundError } from '../../error/catchAxiosErrors';


dotenv.config(); // laad .env

const BASE_URL = process.env.JSONPLACEHOLDER_URL;

export class PostsClient {
    async getPostById(id: number): Promise<Post> {
        return handleAxiosCall(
            axios
                .get<Post>(`${BASE_URL}/posts/${id}`, { timeout: 5000 })
                .then(res => res.data),
            { postId: id }
        );
    }
}


