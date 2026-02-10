import axios, { AxiosError } from 'axios';
import { NetworkError, PostNetworkError } from './network.error';
import { PostNotFoundError } from './post-not-found.error';
import { UnknownApiError } from './unknown.error';
import { TimeoutError } from './time-out.error';
interface ErrorContext {
  postId?: number;
}

export async function handleAxiosCall<T>(
  promise: Promise<T>,
  context: ErrorContext = {}
): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Timeout
      if (error.code === 'ECONNABORTED') {
        throw new TimeoutError();
      }

      // Response received
      if (error.response) {
        if (error.response.status === 404 && context.postId !== undefined) {
          throw new PostNotFoundError(context.postId);
        }

        throw new UnknownApiError(
          `API responded with status ${error.response.status}`
        );
      }

      // No response (network)
      if (error.request) {
        throw new NetworkError();
      }
    }

    throw new UnknownApiError(
      error instanceof Error ? error.message : undefined
    );
  }
}