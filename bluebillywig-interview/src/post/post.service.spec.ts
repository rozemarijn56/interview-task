import axios from 'axios';
import { PostService } from './post.service';

import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { describe, beforeEach, afterEach, it } from 'node:test';
import MockAdapter from 'axios-mock-adapter';
import { PostNotFoundError } from 'src/error/post-not-found.error';
import { TimeoutError } from 'src/error/unknown.error';
import { PostNetworkError } from 'src/error/network.error';

describe('PostsService', () => {
  let service: PostService;
  let mock: MockAdapter;

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
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('returns post when API succeeds', async () => {
    mock.onGet(/\/posts\/1$/).reply(200, {
      userId: 1,
      id: 1,
      title: 'Test',
      body: 'Body',
    });

    const result = await service.getPostById(1);
    expect(result.id).toBe(1);
  });

    it('throws PostNotFoundError with correct postId on 404', async () => {
    mock.onGet(/\/posts\/999$/).reply(404);

    await expect(service.getPostById(999)).rejects.toBeInstanceOf(
      PostNotFoundError
    );

    await expect(service.getPostById(999)).rejects.toThrow(
      'Post with id 999 not found'
    );
  });

  it('throws NetworkError on network error', async () => {
    mock.onGet(/\/posts\/1$/).networkError();

    await expect(service.getPostById(1)).rejects.toBeInstanceOf(
      PostNetworkError
    );
  });

  it('throws TimeoutError on timeout', async () => {
    mock.onGet(/\/posts\/1$/).timeout();

    await expect(service.getPostById(1)).rejects.toBeInstanceOf(
      TimeoutError
    );
  });

});
