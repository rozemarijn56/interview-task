import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MappingModule } from '../mapping/mapping.module';

@Module({
  imports: [HttpModule, MappingModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
