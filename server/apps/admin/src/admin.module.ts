import { Module } from '@nestjs/common';
// import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

// import { UsersModule } from './users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { CommentsModule } from './module/comments/comments.module';
import { ContentsModule } from './module/contents/contents.module';
import { ClassificationModule } from './module/classification/classification.module';
import { FieldsModule } from './module/fields/fields.module';
import { LinksModule } from './module/links/links.module';
import { PptModule } from './module/ppt/ppt.module';
import { TagModule } from './module/tag/tag.module';
import { ThemeModule } from './module/theme/theme.module';
import { UpfileModule } from './module/upfile/upfile.module';

import { CommonModule } from '@app/common';
// import { APP_INTERCEPTOR } from "@nestjs/core";
// import { MorganModule, MorganInterceptor } from "nest-morgan";
// import { Log4jsModule } from '@nestx-log4js/core';
// import {MarkdownUtils} from 'libs/utils/markdown';

@Module({
  imports: [
    // MorganModule,
    // Log4jsModule.forRoot(),

    CommonModule,
    ClassificationModule,
    // UsersModule,
    CommentsModule,
    ContentsModule,
    FieldsModule,
    PptModule,
    TagModule,
    UpfileModule,
    ThemeModule,
    LinksModule,
    AuthModule,
    // MarkdownUtils

  ],
  controllers: [AdminController],
  providers: [AdminService],
  // providers: [AdminService, {
  //             provide: APP_INTERCEPTOR,
  //             useClass: MorganInterceptor("combined"),}],
})
export class AdminModule { }


