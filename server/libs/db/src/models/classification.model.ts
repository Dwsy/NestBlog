import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class Classification {
  @ApiProperty({ description: '分类名称', example: '学习笔记' })
  @prop()
  name: string;

  @ApiProperty({ description: '分类描述', example: 'nest.js学习笔记' })
  @prop()
  description: string;

  @ApiProperty({ description: '当前分类文章数目', example: '文章数' })
  @prop()
  contentsNum: number;

  @ApiProperty({ description: '分类icon', example: 'https://material.iconhelper.cn/' })
  @prop()
  icon: string;
  @ApiProperty({ description: '分类排序', example: '' })
  @prop()
  rank: number;
}

