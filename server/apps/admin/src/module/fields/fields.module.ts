import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import { FieldsService } from './fields.service';

@Module({
    controllers: [FieldsController],
    providers: [FieldsService],
})
export class FieldsModule {}
