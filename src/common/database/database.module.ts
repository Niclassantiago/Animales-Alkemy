import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entity/cat.entity';
import { Dog } from 'src/dogs/entity/dog.entity';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import 'reflect-metadata';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'ejercicio-animales',
        entities: [User, Dog, Cat, Post],
        synchronize: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
  ],
})
export class DatabaseModule {}
