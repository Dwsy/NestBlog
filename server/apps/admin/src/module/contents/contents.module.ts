import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';

@Module({
  controllers: [ContentsController]
})
export class ContentsModule {}
