import { Body, Controller, Param, ParseIntPipe, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { WatchEventDto } from 'src/Shared/watch.dto';

@Controller('user')
export class UserController {
  constructor(private readonly users: UserService) {}

  @Post(':id/watched-40')
  @HttpCode(HttpStatus.NO_CONTENT)
  async watched40(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: WatchEventDto,
  ): Promise<void> {
    await this.users.updateWatched40(id, payload);
  }

  @Post(':id/finished')
  @HttpCode(HttpStatus.NO_CONTENT)
  async finished(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: WatchEventDto,
  ): Promise<void> {
    await this.users.updateFinished(id, payload);
  }
}
