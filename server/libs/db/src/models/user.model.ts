import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'admin' })
  @prop()
  userName: string;

  @ApiProperty({ description: '密码', example: 'password' })
  @prop()
  password: string;

  @ApiProperty({ description: '显示名称', example: '雲靝' })
  @prop()
  screenName: string;

  @ApiProperty({
    description: '用户组',
    example: 'administrator（管理员）/subscriber（贡献者）/general（普通用户）',
  })
  @prop({ enum: ['administrator', 'subscriber', 'general'] })
  group: 'administrator' | 'subscriber' | 'general';
}
