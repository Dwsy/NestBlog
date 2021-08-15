import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
// import { CacheService } from '../../cache/cache.service';
import {memCache} from "../../../../../libs/utils/memCache";
import { ThemeService } from './theme.service';
@Module({
  controllers: [ThemeController],
  providers: [memCache, ThemeService]
})
export class ThemeModule {}
