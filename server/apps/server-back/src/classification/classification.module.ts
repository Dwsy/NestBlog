import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';

@Module({
    controllers: [ClassificationController],
})
export class ClassificationModule {}
