import { MappingService } from './mapping.service';
import { readFile } from 'node:fs/promises';
import { json } from 'node:stream/consumers';
import { Test, TestingModule } from '@nestjs/testing';
jest.mock('node:fs/promises', () => ({
  readFile: jest.fn(),
}));

describe('MappingService', () => {
  let service: MappingService;

  beforeEach(() => {
    service = new MappingService();
    jest.clearAllMocks();
  });

  it('returns mediaClipId for an existing PostId', async () => {
    (readFile as jest.Mock).mockResolvedValueOnce(
      JSON.stringify({
        '1': 'clip-abc',
        '2': 'clip-def',
      }),
    );

    const result = await service.getMediaclipIdForPost(1);
    expect(result).toBe('clip-abc');

    const result2 = await service.getMediaclipIdForPost(2);
    expect(result2).toBe('clip-def');
    expect(readFile).toHaveBeenCalled();
  });

  it('returns null when posstId does nog exist in mapping', async () => {
    (readFile as jest.Mock).mockResolvedValueOnce(
      JSON.stringify({
        '1': 'clip-abc',
      }),
    );

    const result = await service.getMediaclipIdForPost(999);

    expect(result).toBeNull();
  });

  it('uses cached mapping and does not read file twice', async () => {
    (readFile as jest.Mock).mockResolvedValueOnce(
      JSON.stringify({
        '1': 'clip-abc',
      }),
    );

    const firstCall = await service.getMediaclipIdForPost(1);
    const secondCall = await service.getMediaclipIdForPost(1);

    expect(firstCall).toBe('clip-abc');
    expect(secondCall).toBe('clip-abc');

    expect(readFile).toHaveBeenCalledTimes(1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
