import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import {Types,ObjectId} from "mongoose";
@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class Relationship {
  @ApiProperty({ description: '文章自动生成id', example: '自动生成' })
  @prop()
  id: ObjectId;

  @ApiProperty({ description: 'RESTFUL风格', example: 'RESTFUL风格id' })
  @prop()
  restfulId: string;
}
