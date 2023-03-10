import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { User } from '../../users/entity/users.entity';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  breed: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  age: number;

  @IsString()
  @IsOptional()
  owner: User;
}
