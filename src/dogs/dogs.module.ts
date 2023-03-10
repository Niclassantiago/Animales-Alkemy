import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogRepository } from './reopsitory/dog.repository';

@Module({
  controllers: [DogsController],
  providers: [DogsService, DogRepository],
})
export class DogsModule {}
