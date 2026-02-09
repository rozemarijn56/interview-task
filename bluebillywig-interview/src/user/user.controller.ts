import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import type { WatchEventPayload } from '../shared/types';

@Controller('user')
export class UserController {
      constructor(private readonly users: UserService) {}

  @Post('/:id/watched40')
  async watched40(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: WatchEventPayload,
  ) {
    return this.users.updateWatched40(id, payload);
  }

  @Post('/:id/finished')
  async finished(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: WatchEventPayload,
  ) {
    return this.users.updateFinished(id, payload);
  }
}
