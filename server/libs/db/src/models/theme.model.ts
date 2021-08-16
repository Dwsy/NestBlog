import {prop, modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';
import {Types, ObjectId, Schema as MongooseSchema} from 'mongoose';
import {Classification} from 'libs/db/models/classification.model';

@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
export class Theme {
    @ApiProperty({description: '主题名称', example: 'light/dark'})
    @prop()
    themeName: 'light' | 'dark';
    @ApiProperty({description: '导航栏图片', example: ''})
    @prop()
    navigationImage: string;
    @ApiProperty({description: '顶栏图片', example: ''})
    @prop()
    topImage: string;
    // @ApiProperty({description: '主题配色json', example: ''})
    // @prop()
    // color: object;
    @ApiProperty({description: 'primary', example: ''})
    @prop()
    primary: string;
    @ApiProperty({description: 'secondary', example: ''})
    @prop()
    secondary: string;
    @ApiProperty({description: 'accent', example: ''})
    @prop()
    accent: string;
    @ApiProperty({description: 'error', example: ''})
    @prop()
    error: string;
    @ApiProperty({description: 'info', example: ''})
    @prop()
    info: string;
    @ApiProperty({description: 'success', example: ''})
    @prop()
    success: string;
    @ApiProperty({description: 'warning', example: ''})
    @prop()
    warning: string;
}
