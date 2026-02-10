import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './post.service';
import { HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs';
import { NotFoundException } from '@nestjs/common';

describe('PostsService', () => {
  let service: PostsService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(PostsService);
    httpService = module.get(HttpService);
  });

  it('returns a post when API returns valid data', async () => {
    jest
      .spyOn(httpService, 'get')
      .mockReturnValue(of({ data: { id: 1, title: 'test', body: 'body', userId: 1 } } as any));

    const result = await service.getPostById(1);
    expect(result.id).toBe(1);
  });

  it('throws NotFoundException when API returns empty object', async () => {
    jest.spyOn(httpService, 'get').mockReturnValue(of({ data: {} } as any));

    await expect(service.getPostById(1)).rejects.toThrow(NotFoundException);
  });

  it('throws NotFoundException when request fails', async () => {
    jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => new Error('Network error')));

    await expect(service.getPostById(1)).rejects.toThrow(NotFoundException);
  });
});
