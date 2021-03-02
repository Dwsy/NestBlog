import {prop, modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';
import {Types, ObjectId, Schema as MongooseSchema} from "mongoose";
import {Classification} from "libs/db/models/classification.model";

@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
export class Navigation {
    @ApiProperty({description: 'icon', example: 'mdi-triforce'})
    @prop()
    icon: string;
    @ApiProperty({description: 'icon-alt', example: 'mdi-chevron-down'})
    @prop()
    iconAlt: string;
    @ApiProperty({description: 'text', example: 'text'})
    @prop()
    text: string;

    @ApiProperty({description: 'link', example: 'link'})
    @prop()
    link: string;

    @ApiProperty({description: 'haveChildren', example: 'false'})
    @prop()
    haveChildren: boolean;

    @ApiProperty({description: '文章分类 id'})
    @prop({type: MongooseSchema.Types.ObjectId, ref: Classification})
        // @prop()
    classification: MongooseSchema.Types.ObjectId;



    @ApiProperty({description: 'rank', example: '1'})
    @prop()
    rank: number;


}

