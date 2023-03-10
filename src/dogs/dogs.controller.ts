import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/createDog.dto';
import { Dog } from './entity/dog.entity';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get('/test-error')
  @UseFilters()
  test() {
    throw new HttpException('holo desde aca', HttpStatus.EXPECTATION_FAILED);
  }

  @Get()
  getDogs(): Dog[] {
    return this.dogsService.getAll();
  }

  @Get(':id')
  getDogById(@Param('id', ParseUUIDPipe) id: string): Dog {
    return this.dogsService.findOne(id);
  }

  @Post()
  createDogs(@Body() dogsDto: CreateDogDto) {
    return this.dogsService.create(dogsDto);
  }

  @Patch(':id')
  updateDog(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dogsDto: CreateDogDto,
  ): CreateDogDto {
    return this.dogsService.update(dogsDto, id);
  }

  @Delete(':id')
  deleteDog(@Param('id', ParseUUIDPipe) id: string) {
    return this.dogsService.deleteOne(id);
  }
}
