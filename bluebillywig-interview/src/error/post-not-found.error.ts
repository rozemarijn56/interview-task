export class PostNotFoundError extends Error {
    constructor(postId: number){
        super(`Post with id ${postId} not found`);
        this.name = 'PostNotFoundError';
    }
}