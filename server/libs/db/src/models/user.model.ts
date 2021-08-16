import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'admin' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'password' })
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;

  // @ApiProperty({ description: '显示名称', example: '雲靝' })
  // @prop()
  // screenName: string;

  // @ApiProperty({
  //   description: '用户组',
  //   example: 'administrator（管理员）/subscriber（贡献者）/general（普通用户）',
  // })
  // @prop({ enum: ['administrator', 'subscriber', 'general'] })
  // group: 'administrator' | 'subscriber' | 'general';
}
