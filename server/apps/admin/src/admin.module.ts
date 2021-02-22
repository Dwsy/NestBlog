import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ContentsModule } from './contents/contents.module';
import { FieldsModule } from './fields/fields.module';
import { SettingoptionsModule } from './settingoptions/settingoptions.module';
import { TagModule } from './tag/tag.module';
import { UpfileModule } from './upfile/upfile.module';
import { ClassificationModule } from './classification/classification.module';

@Module({
  imports: [
    ClassificationModule,
    DbModule,
    UsersModule,
    CommentsModule,
    ContentsModule,
    FieldsModule,
    SettingoptionsModule,
    TagModule,
    UpfileModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
