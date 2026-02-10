import { Post } from "src/post/post.types";

export interface PostWithMediaClip extends Post {
  mediaClipId: string;
}