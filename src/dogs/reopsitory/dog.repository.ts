import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from '../entity/dog.entity';
import { v4 as uuid } from 'uuid';
import { UpdateDogDto } from '../dto/updateDog.dto';

@Injectable()
export class DogRepository {
  private dogs: Dog[];

  constructor() {
    this.dogs = [
      {
        id: uuid(),
        name: 'Shagui',
        age: 2,
        breed: 'poodle',
      },
      {
        id: uuid(),
        name: 'Oso',
        age: 11,
        breed: 'Police',
      },
      {
        id: uuid(),
        name: 'Rocco',
        age: 4,
        breed: 'alsatian',
      },
    ];
  }

  findAll() {
    return this.dogs;
  }

  findById(id: string) {
    const dog = this.dogs.find((dog) => dog.id === id);
    try {
      if (!dog) {
        throw new NotFoundException(`Dog with id ${id} not found`);
      }
      return dog;
    } catch (error) {
      throw new Error(error);
    }
  }

  createDog(dog: Dog) {
    this.dogs.push(dog);

    return dog;
  }

  update(updatedDog: UpdateDogDto, id: string): UpdateDogDto {
    try {
      this.dogs.map((dog) => {
        if (dog.id === id) {
          (dog.age = updatedDog.age || dog.age),
            (dog.breed = updatedDog.breed || dog.breed),
            (dog.owner = updatedDog.owner || dog.owner),
            (dog.name = updatedDog.name || dog.name);
        }
      });
      return updatedDog;
    } catch (error) {
      throw new Error(error);
    }
  }

  deleteDog(id: string) {
    const dogToDelete = this.findById(id);
    try {
      const newDogsArray = this.dogs.filter((dog) => dog.id !== id);
      this.dogs = newDogsArray;
      return dogToDelete;
    } catch (error) {
      throw new Error(error);
    }
  }
}
