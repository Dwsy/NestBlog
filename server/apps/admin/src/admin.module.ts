import { Module } from '@nestjs/common';
// import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
// import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ContentsModule } from './contents/contents.module';
import { FieldsModule } from './fields/fields.module';
import { PptModule } from './ppt/ppt.module';
import { TagModule } from './tag/tag.module';
import { UpfileModule } from './upfile/upfile.module';
import { ClassificationModule } from './classification/classification.module';
import { ThemeModule } from './theme/theme.module';
import { LinksModule } from './links/links.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@app/common';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganModule, MorganInterceptor } from "nest-morgan";
// import { Log4jsModule } from '@nestx-log4js/core';

@Module({
  imports: [
    MorganModule,
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

    
  ],
  controllers: [AdminController],
  providers: [AdminService, {
              provide: APP_INTERCEPTOR,
              useClass: MorganInterceptor("combined"),}],
})
export class AdminModule { }


