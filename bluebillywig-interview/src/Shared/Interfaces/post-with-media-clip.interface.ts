import { Post } from "./post-interface";


export interface PostWithMediaClip extends Post {
  mediaClipId: string;
}