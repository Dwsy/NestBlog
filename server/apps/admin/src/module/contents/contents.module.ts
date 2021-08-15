import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { CacheService } from '../../cache/cache.service';
import { ContentsService } from './contents.service';

@Module({
  controllers: [ContentsController],
  providers: [CacheService, ContentsService]
})
export class ContentsModule {}
