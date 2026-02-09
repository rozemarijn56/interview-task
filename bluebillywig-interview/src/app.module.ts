import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MappingModule } from './mapping/mapping.module';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';

@Module({
  imports: [MappingModule, PostModule, UserModule],
  controllers: [AppController, PostController, UserController],
  providers: [],
})
export class AppModule {}
