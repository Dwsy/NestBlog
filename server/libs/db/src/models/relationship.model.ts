import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '文章自动生成id', example: '自动生成' })
  @prop()
  userName: string;

  @ApiProperty({ description: 'RESTFUL风格id', example: 'RESTFUL风格id' })
  @prop()
  restfulId: number;
}
