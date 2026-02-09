import { Injectable } from '@nestjs/common';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

@Injectable()
export class MappingService {
  private cache: Record<string, string> | null = null;

  private mappingPath() {
    // projectRoot/static/mapping.json
    return join(process.cwd(), 'static', 'mapping.json');
  }

  async getMediaclipIdForPost(postId: number): Promise<string | null> {
    if (!this.cache) {
      const raw = await readFile(this.mappingPath(), 'utf-8');
      this.cache = JSON.parse(raw) as Record<string, string>;
    }

    return this.cache[String(postId)] ?? null;
  }
}
