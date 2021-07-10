import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import {CacheService} from "../../cache/cache.service";

@Module({
  controllers: [FieldsController],
  providers: [CacheService]
})
export class FieldsModule {}
