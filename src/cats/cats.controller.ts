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
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
import { Cat } from './entity/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/test-error')
  @UseFilters()
  test() {
    throw new HttpException('holo desde aca', HttpStatus.EXPECTATION_FAILED);
  }

  @Get()
  getCats() {
    return this.catsService.getAll();
  }

  @Get(':id')
  getDogById(@Param('id', ParseUUIDPipe) id: string) {
    return this.catsService.getOne(id);
  }

  @Post()
  createCats(@Body() catsDto: CreateCatDto) {
    return this.catsService.insert(catsDto);
  }
  @Patch(':id')
  updateDog(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(updateCatDto, id);
  }

  @Delete(':id')
  deleteDog(@Param('id', ParseUUIDPipe) id: string) {
    return this.catsService.removeCat(id);
  }
}
