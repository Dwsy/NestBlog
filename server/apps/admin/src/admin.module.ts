import {HttpModule, Module} from '@nestjs/common';
// import { DbModule } from 'libs/db';
import {AdminController} from './admin.controller';
import {AdminService} from './admin.service';

// import { UsersModule } from './users/users.module';
import {AuthModule} from './module/auth/auth.module';
import {CommentsModule} from './module/comments/comments.module';
import {ContentsModule} from './module/contents/contents.module';
import {ClassificationModule} from './module/classification/classification.module';
import {FieldsModule} from './module/fields/fields.module';
import {LinksModule} from './module/links/links.module';
import {PptModule} from './module/ppt/ppt.module';
import {TagModule} from './module/tag/tag.module';
import {ThemeModule} from './module/theme/theme.module';
import {UpfileModule} from './module/upfile/upfile.module';

import {CommonModule} from '@app/common';
import { FieldsService } from './module/fields/fields.service';
// import {timeout} from "rxjs/operators";
// import { APP_INTERCEPTOR } from "@nestjs/core";
// import { MorganModule, MorganInterceptor } from "nest-morgan";
// import { Log4jsModule } from '@nestx-log4js/core';
// import {MarkdownUtils} from 'libs/utils/markdown';

// import { RedisModule } from 'nestjs-redis';
// import { CacheModule } from './cache/cache.module';

// SSL

@Module({
  imports: [
    // MorganModule,
    // Log4jsModule.forRoot(),
    // HttpModule.registerAsync({
    //   useFactory:
    // ),
    // HttpModule.register({
    //   timeout: 5000,
    //   maxRedirects: 5,
    // }),
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
  providers: [AdminService,FieldsService],
  // CacheModule,
//    RedisModule.register({
//       host: process.env.REDIS_HOST,
//       port: parseInt(process.env.REDIS_PORT),
//       db: parseInt(process.env.REDIS_DB),
//       password: process.env.REDIS_PASSWORD,
//       keyPrefix: process.env.REDIS_PRIFIX,
//     }),
  // providers: [AdminService, {
  //             provide: APP_INTERCEPTOR,
  //             useClass: MorganInterceptor("combined"),}],
})
export class AdminModule {
}
