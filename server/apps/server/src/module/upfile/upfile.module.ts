import { Module } from '@nestjs/common';
import { UpfileController } from './upfile.controller';
import { UpfileService } from './upfile.service';

@Module({
    controllers: [UpfileController],
    providers: [UpfileService],
})
export class UpfileModule {}
