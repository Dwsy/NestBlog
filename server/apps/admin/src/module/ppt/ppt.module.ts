import { Module } from '@nestjs/common';
import { PptController } from './ppt.controller';
import { PptService } from './ppt.service';

@Module({
  controllers: [PptController],
  providers: [PptService]
})
export class PptModule {}
