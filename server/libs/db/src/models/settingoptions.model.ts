import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
//博客设置
export class SettingOptions {
  @ApiProperty({ description: '首页轮播图', example: '' })
  @prop()
  pptImage: String;
  @ApiProperty({ description: '首页轮播图链接', example: '' })
  @prop()
  pptlink: String;
}
