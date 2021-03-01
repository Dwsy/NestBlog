import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ContentsModule } from './contents/contents.module';
import { FieldsModule } from './fields/fields.module';
import { PptModule } from './ppt/ppt.module';
import { TagModule } from './tag/tag.module';
import { ClassificationModule } from './classification/classification.module';
import {NavigationModule} from "./navigation/navigation.module";

@Module({
  imports: [
    ClassificationModule,
    DbModule,
    UsersModule,
    CommentsModule,
    ContentsModule,
    FieldsModule,
    PptModule,
    TagModule,
    NavigationModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
