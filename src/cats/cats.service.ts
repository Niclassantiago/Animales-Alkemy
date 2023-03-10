import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  getAll() {
    return this.catsRepository.find();
  }

  getOne(id: string) {
    return this.catsRepository.findOneBy({ id });
  }

  async insert(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = this.catsRepository.create(createCatDto);
    await this.catsRepository.save(cat);
    return cat;
  }

  async update(updateCatDTO: UpdateCatDto, id: string): Promise<Cat> {
    const newCat = {
      id,
      ...updateCatDTO,
    };
    const cat = await this.catsRepository.preload(newCat);
    if (cat) {
      return this.catsRepository.save(cat);
    }
    throw new NotFoundException(`Cat with id: ${id} not found`);
  }

  async removeCat(id: string) {
    const cat = await this.catsRepository.findOneBy({ id });
    if (cat) {
      return this.catsRepository.remove(cat);
    }
    throw new NotFoundException(`Cat ${id} does not exist`);
  }
}
