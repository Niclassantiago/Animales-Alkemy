import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { User } from 'src/users/entity/users.entity';

export class CreateDogDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  breed: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsString()
  @IsOptional()
  owner: User;
}
