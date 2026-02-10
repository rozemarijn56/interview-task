import { MediaclipMappingService } from "src/mapping/mediaclip/mediaclip-mapping.service";
import { PostService } from "../post.service";
import { PostWithMediaClip } from "src/Shared/Interfaces/post-with-media-clip.interface";
import { MediaClipNotFoundError } from "src/error/media-clip-not-found.error";

export class PostMediaclipService {
  constructor(
    private readonly postService: PostService,
    private readonly mappingService: MediaclipMappingService
  ) {}

  async getPostWithMediaClip(
    postId: number
  ): Promise<PostWithMediaClip> {
    /** Guard 1: postId valid */
    if (!Number.isInteger(postId) || postId <= 0) {
      throw new Error('Invalid postId');
    }

    /** Step 1: fetch post */
    const post = await this.postService.getPostById(postId);
    // PostsService throwt al domein-errors → hier geen null-check nodig

    /** Step 2: fetch mediaclipId */
    const mediaClipId =
      this.mappingService.getMediaclipIdForPost(postId);

    /** Guard 2: mapping must exist */
    if (!mediaClipId) {
      throw new MediaClipNotFoundError(postId);
    }

    /** Step 3: combine */
    return {
      ...post,
      mediaClipId,
    };
  }
}