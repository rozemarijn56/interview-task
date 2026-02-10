export class MediaClipNotFoundError extends Error {
  constructor(postId: number) {
    super(`No mediaclip mapping found for post ${postId}`);
    this.name = 'MediaClipNotFoundError';
  }
}