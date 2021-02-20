import { Module } from '@nestjs/common';
import { UpfileController } from './upfile.controller';

@Module({
  controllers: [UpfileController]
})
export class UpfileModule {}
