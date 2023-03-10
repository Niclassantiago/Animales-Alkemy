import { Dog } from '../../dogs/entity/dog.entity';
import { Cat } from '../../cats/entity/cat.entity';
import {
  IsArray,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UsersDto {
  @IsString()
  @Length(3, 10)
  name: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsArray()
  @IsOptional()
  dogs: Dog[];

  @IsArray()
  @IsOptional()
  cats: Cat[];

  @IsString()
  @IsEmail()
  email: string;
}
