import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Global } from '@nestjs/common';
import { User } from './models/user.model';
import { Contents } from './models/contents.model';
import { Fields } from './models/fields.model';
import { UpFile } from './models/upfile.model';
import { Tag } from './models/tag.model';
import { PptOptions } from './models/ppt.model';
import { Comments } from './models/comments.model';
import { Classification } from './models/classification.model';
import { Theme } from './models/theme.model';
import { Links } from './models/links.model';

const models = TypegooseModule.forFeature([
  Classification,
  Comments,
  Contents,
  Fields,
  PptOptions,
  Tag,
  UpFile,
  User,
  Theme,
  Links
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
