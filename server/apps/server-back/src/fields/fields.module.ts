import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';

@Module({
    controllers: [FieldsController],
})
export class FieldsModule {}
