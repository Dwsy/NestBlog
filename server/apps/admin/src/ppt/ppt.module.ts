import { Module } from '@nestjs/common';
import { PptController } from './ppt.controller';

@Module({
  controllers: [PptController]
})
export class PptModule {}
