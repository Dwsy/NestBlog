import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import {FieldsService} from  '../fields/fields.service'

@Module({
  controllers: [ContentsController],
  providers: [ContentsService,FieldsService],
})
export class ContentsModule {}
