import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { PostsDto } from './dto/posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.findAll();
  }

  @Get(':id')
  getPostById(@Param('id', ParseUUIDPipe) id: string): PostsDto {
    return this.postsService.findById(id);
  }
  @Post()
  createPosts(@Body() postsDto: PostsDto) {
    return this.postsService.createPost(postsDto);
  }
}
