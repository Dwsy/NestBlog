import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { Global } from '@nestjs/common';
import { User } from './models/user.model';


const models = TypegooseModule.forFeature([
  User
])


@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/myblog',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
