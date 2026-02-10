import * as fs from 'fs';
import * as path from 'path';

export class MediaclipMappingService {
  private readonly mapping: Map<number, string>;

  constructor() {
    this.mapping = this.loadMapping();
  }

  private loadMapping(): Map<number, string> {
    const filePath = path.join(__dirname, 'mapping.csv');

    if (!fs.existsSync(filePath)) {
      throw new Error('[MediaClipMappingService] mapping.csv not found');
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    const map = new Map<number, string>();

    content
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean)
      .filter(line => line.trim().length > 0)
      .forEach((line, index) => {
        const [postIdRaw, clipIdRaw] = line.split(',');

        const postId = Number(postIdRaw);
        const clipId = clipIdRaw?.replace(/"/g, '').trim();

        if (!Number.isInteger(postId) || !clipId) {
          throw new Error(
            `[MediaclipMappingService] Invalid csv fromat on line ${index + 1}`);
        }

        map.set(postId, clipId);
      });
    return map;
  }

  public getMediaclipIdForPost(postId: number): string | null {
    if (!Number.isInteger(postId) || postId <= 0) {
      throw new Error('[MediaclipMappingService] invalid PostId');
    }
    return this.mapping.get(postId) ?? null;
  }
}
