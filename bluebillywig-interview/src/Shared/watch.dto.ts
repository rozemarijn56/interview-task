import { IsNumber, IsString } from 'class-validator';


export class WatchEventDto {
  @IsNumber()
  postId: number;

  @IsString()
  mediaclipId: string;

  @IsString
  event: string;

  @IsString()
  timestamp: string;
}
