import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import {Types,ObjectId} from "mongoose";
@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class UpFile {
  @ApiProperty({ description: '文件名', example: 'xx-xxx-xxx' })
  @prop()
  fileName: string;

  @ApiProperty({ description: '文件所属文章id', example: '文章id' })
  @prop()
  contentsId: ObjectId;

  @ApiProperty({
    description: '文件url',
    example:
      'http://tva1.sinaimg.cn/large/005NWBIgly1gnjj15c5fsj30w20xc4gt.jpg',
  })
  @prop()
  url: string;

  @ApiProperty({ description: '文件类型', example: '图片|压缩包|音乐|其他' })
  @prop({ enum: ['image', 'compressed', 'audio', 'other'] })
  group: 'image' | 'compressed' | 'audio' | 'other';
}
