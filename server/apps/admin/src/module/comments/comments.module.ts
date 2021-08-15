import { Module } from '@nestjs/common';
import { Comments } from 'libs/db/models/comments.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { CommentsController } from './comments.controller';

// import { TypegooseModule } from 'nestjs-typegoose';
import { CommentsService } from './comments.service';
@Module({

  imports: [TypegooseModule.forFeature([Comments])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
