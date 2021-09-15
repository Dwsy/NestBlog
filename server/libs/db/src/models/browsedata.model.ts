import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class Browsedata {
  @ApiProperty({ description: 'ip', example: '0.0.0.0' })
  @prop()
  ip: String;
  @ApiProperty({ description: 'info', example: '{}' })
  @prop()
  info: {};
  @ApiProperty({
    description: 'UA',
    example:
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
  })
  @prop()
  ua: String;
  @prop()
  view: Number;

}
