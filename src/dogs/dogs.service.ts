import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/createDog.dto';
import { v4 as uuid } from 'uuid';
import { UpdateDogDto } from './dto/updateDog.dto';
import { DogRepository } from './reopsitory/dog.repository';
import { Dog } from './entity/dog.entity';

@Injectable()
export class DogsService {
  constructor(private readonly dogRepository: DogRepository) {}

  getAll(): Dog[] {
    return this.dogRepository.findAll();
  }

  findOne(name: string): Dog {
    return this.dogRepository.findById(name);
  }

  create(createDogDTO: CreateDogDto): Dog {
    const dog = {
      id: uuid(),
      ...createDogDTO,
    };
    return this.dogRepository.createDog(dog);
  }

  update(updateDogDTO: UpdateDogDto, id: string) {
    return this.dogRepository.update(updateDogDTO, id);
  }

  deleteOne(id: string) {
    return this.dogRepository.deleteDog(id);
  }
}
