import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { Global } from '@nestjs/common';
import { User } from './models/user.model';
import { Contents } from './models/contents.model';
import { Fields } from './models/fields.model';
import { UpFile } from './models/upfile.model';
import { Tag } from './models/tag.model';
import { SettingOptions } from './models/settingoptions.model';
import { Comments } from './models/comments.model';



const models = TypegooseModule.forFeature([
  Comments,
  Contents,
  Fields,
  SettingOptions,
  Tag,
  UpFile,
  User

])


@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/myblog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }
