import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class Tag {
  @ApiProperty({ description: '标签名', example: '设计模式' })
  @prop()
  name: string;
  @ApiProperty({ description: '标签颜色', example: 'primary' })
  @prop()
  colours: string;

  @ApiProperty({ description: '标签描述', example: '设计模式是学习心得' })
  @prop()
  description: string;

    @ApiProperty({description: '当前标签文章数目', example: '文章数'})
    @prop()
    contentsNum: number;

    // @ApiProperty({description:'标签排序',example:''})
    @ApiProperty({description: '标签权重', example: '整数型，越高越靠前'})
    @prop()
    order: number;

    @ApiProperty({
        description: '标签icon',
        example: 'https://material.iconhelper.cn/',
    })
    @prop()
    icon: String;
}
