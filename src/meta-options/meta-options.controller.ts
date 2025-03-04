import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { CreatePostMetaOptionsDto } from './dto/create-post-meta-options.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}
  @Post('/')
  async create(@Body() CreatePostMetaOptionsDto: CreatePostMetaOptionsDto) {
    const response = await this.metaOptionsService.create(
      CreatePostMetaOptionsDto,
    );
    return response;
  }
}
