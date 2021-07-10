import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { CacheService } from '../../cache/cache.service';
@Module({
  controllers: [ThemeController],
  providers: [CacheService]
})
export class ThemeModule {}
