import { Module } from '@nestjs/common';
import { SettingoptionsController } from './settingoptions.controller';

@Module({
  controllers: [SettingoptionsController]
})
export class SettingoptionsModule {}
