import { Injectable } from '@nestjs/common';
import { Body, Controller, Get, Post, Delete, Put, UseGuards, HttpCode } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Comments } from 'libs/db/models/comments.model';
import { Fields } from 'libs/db/models/fields.model';
import { Contents } from 'libs/db/models/contents.model';
// import { ModelType } from '@typegoose/typegoose/lib/types';
import { prop, ReturnModelType } from '@typegoose/typegoose';
import { Param } from '@nestjs/common';
import { Schema as MongooseSchema, Types } from "mongoose";
import { AuthGuard } from '@nestjs/passport';

import { sendCommentDto } from './dto/sendCommentDto';
import { sendChildCommentDto } from './dto/sendChildCommentDto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comments) private readonly CommentsModel: ReturnModelType<typeof Comments>,
        @InjectModel(Fields) private readonly fieldsModel: ReturnModelType<typeof Fields>,
        @InjectModel(Contents) private readonly contentsModel: ReturnModelType<typeof Fields>,
    ) {
    }
    async delComment(id: string,  isChild: String){
        if (isChild === "true") {
            // @ts-ignore
            await this.fieldsModel.findByIdAndUpdate((await this.contentsModel.findById((await this.CommentsModel.findById(id, 'contentsId')).contentsId, 'fieldsId')).fieldsId, {$inc: {"commentsNum": -1}})
            await this.CommentsModel.findByIdAndDelete(id)
            return HttpCode(200)

        } else {
            // @ts-ignore
            await this.fieldsModel.findByIdAndUpdate((await this.contentsModel.findById((await this.CommentsModel.findById(id, 'contentsId')).contentsId, 'fieldsId')).fieldsId, {$inc: {"commentsNum": -((await this.CommentsModel.findById(id,'childId')).childId).length}})
            await this.CommentsModel.findByIdAndDelete(id)
            await this.CommentsModel.deleteMany({fatherId: id})
            return HttpCode(200)
        }

    }
}
