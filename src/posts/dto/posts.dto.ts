import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class PostsDto {
  @IsInt()
  id: string;

  @IsString()
  title: string;

  @IsString()
  @Length(1, 250)
  content: string;

  @IsString()
  @IsOptional()
  tags: string;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
