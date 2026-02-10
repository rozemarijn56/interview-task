import { IsString, IsNumber } from 'class-validator';

export class WatchEventDto {
  @IsNumber()
  postId: number;

  @IsString()
  mediaclipId: string;

  @IsString()
  timestamp: string;
}
