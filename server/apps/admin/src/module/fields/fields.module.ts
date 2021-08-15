import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import {CacheService} from "../../cache/cache.service";
import { FieldsService } from './fields.service';

@Module({
  controllers: [FieldsController],
  providers: [CacheService, FieldsService]
})
export class FieldsModule {}
