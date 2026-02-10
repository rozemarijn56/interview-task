import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { WatchEventDto } from './dto/watch-event.dto';
import type { AxiosResponse } from 'axios';
import User from 'User.interface';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly http: HttpService) {}

  async markWatched40(userId: number, payload: WatchEventDto): Promise<User> {
    const user = await this.findUser(userId);
    this.validatePayload(payload);

    user.watched40 = user.watched40 ?? [];
    user.watched40.push(payload);

    return this.patchUser(userId, { watched40: user.watched40 });
  }

  async markFinished(userId: number, payload: WatchEventDto): Promise<User> {
    const user = await this.findUser(userId);
    this.validatePayload(payload);

    user.finished = user.finished ?? [];
    user.finished.push(payload);

    return this.patchUser(userId, { finished: user.finished });
  }

  /** --- Private helpers --- */

  private validatePayload(payload: WatchEventDto) {
    if (!payload.postId || !payload.mediaclipId || !payload.timestamp) {
      throw new BadRequestException('Invalid watch event payload');
    }
  }

  private async findUser(userId: number): Promise<User> {
    try {
      const response: AxiosResponse<User> = await firstValueFrom(
        this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`),
      );
      if (!response.data) {
        throw new NotFoundException(`User ${userId} not found`);
      }
      return response.data;
    } catch (error: any) {
      this.logger.error(`Error fetching user ${userId}: ${error.message}`, error.stack);
      throw new NotFoundException(`User ${userId} not found`);
    }
  }

  private async patchUser(userId: number, data: Partial<User>): Promise<User> {
    try {
      const response: AxiosResponse<User> = await firstValueFrom(
        this.http.patch<User>(`https://jsonplaceholder.typicode.com/users/${userId}`, data, {
          headers: { 'Content-Type': 'application/json' },
        }),
      );
      return response.data;
    } catch (error: any) {
      this.logger.error(`Error patching user ${userId}: ${error.message}`, error.stack);
      throw new InternalServerErrorException(`Failed to update user ${userId}`);
    }
  }
}
