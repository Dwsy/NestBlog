import { Module } from '@nestjs/common';
import { SettingoptionsController } from './ppt.controller';

@Module({
  controllers: [SettingoptionsController]
})
export class SettingoptionsModule {}
