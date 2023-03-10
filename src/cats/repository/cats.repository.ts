import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Cat } from '../entity/cat.entity';
import { v4 as uuid } from 'uuid';
import { UpdateCatDto } from '../dto/updateCat.dto';

@Injectable()
export class CatRepository {
  private cats: Cat[];

  constructor() {
    this.cats = [
      {
        id: uuid(),
        name: 'Betina',
        age: 2,
        breed: 'Siverian',
      },
      {
        id: uuid(),
        name: 'Bono',
        age: 11,
        breed: 'Persian',
      },
      {
        id: uuid(),
        name: 'Hatila',
        age: 4,
        breed: 'Siamese',
      },
    ];
  }

  findAll() {
    return this.cats;
  }

  findById(id: string) {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  createCat(cat: Cat) {
    this.cats.push(cat);

    return cat;
  }

  update(updatedCat: UpdateCatDto, id: string): UpdateCatDto {
    try {
      this.cats.map((cat) => {
        if (cat.id === id) {
          (cat.age = updatedCat.age || cat.age),
            (cat.breed = updatedCat.breed || cat.breed),
            (cat.owner = updatedCat.owner || cat.owner),
            (cat.name = updatedCat.name || cat.name);
        }
      });
      return updatedCat;
    } catch (error) {
      throw new Error(error);
    }
  }

  deleteCat(id: string) {
    const catToDelete = this.findById(id);
    try {
      const newCatsArray = this.cats.filter((cat) => cat.id !== id);
      this.cats = newCatsArray;
      return catToDelete;
    } catch (error) {
      throw new Error(error);
    }
  }
}
