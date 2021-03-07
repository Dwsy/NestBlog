import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';

@Module({
  controllers: [ThemeController]
})
export class ThemeModule {}
