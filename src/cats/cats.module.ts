import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatRepository } from './repository/cats.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';

@Module({
  controllers: [CatsController],
  providers: [CatsService, CatRepository],
  imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {}
