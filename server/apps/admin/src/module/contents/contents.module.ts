import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { CacheService } from '../../cache/cache.service';

@Module({
  controllers: [ContentsController],
  providers: [CacheService]
})
export class ContentsModule {}
