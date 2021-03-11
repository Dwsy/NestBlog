import {prop, modelOptions, } from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';
import {Tag} from './tag.model';
import {Classification} from './classification.model';
import { Schema as MongooseSchema} from "mongoose";
import {Contents} from "libs/db/models/contents.model";


@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
//文章自定义字段
export class Fields {
    @ApiProperty({description: '文章id', example: 'id'})
    @prop({type: MongooseSchema.Types.ObjectId, ref: Contents})
        // @prop()
    contentsId: MongooseSchema.Types.ObjectId;

    @ApiProperty({description: '标题', example: '标题'})
    @prop()
    title: string;

    @ApiProperty({description: '文章封面大url', example: '文章封面大'})
    @prop()
    cover: string;

    @ApiProperty({description: '文章封面小url', example: '文章封面小'})
    @prop()
    coverSmall: string;

    @ApiProperty({description: '文章标签', example: ''})
    @prop({type: MongooseSchema.Types.ObjectId, ref: Tag})
    tag: Array<MongooseSchema.Types.ObjectId>

    @ApiProperty({ description: '评论数', example: '123' })
    @prop()
    commentsNum: Number;

    @ApiProperty({description: '文章分类 id',example: ''})
    @prop({type: MongooseSchema.Types.ObjectId, ref: Classification})
        // @prop()
    classification: MongooseSchema.Types.ObjectId;

    @ApiProperty({ description: '是否为草稿', example: false })
    @prop()
    isDraft: boolean;

}
