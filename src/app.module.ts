import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [DatabaseModule, DogsModule, CatsModule, UsersModule, PostsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
