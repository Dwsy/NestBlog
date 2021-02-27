import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Tag } from './tag.model';
import {  Classification} from './classification.model';

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
//文章自定义字段
export class Fields {
  @ApiProperty({ description: '文章id', example: 'id' })
  @prop()
  contentsId: string;
  @ApiProperty({ description: '标题', example: '标题' })
  @prop()
  title: string;
  @ApiProperty({ description: '文章封面大url', example: '文章封面大' })
  @prop()
  cover: string;

  @ApiProperty({ description: '文章封面小url', example: '文章封面小' })
  @prop()
  coverSmall: string;

  //多个
  //   @ApiProperty({ description: '文章标签', example: '标签对象' })
  //   @prop({
  //     ref: 'Tag',
  //     localField: '_id',
  //     foreignField: 'contents',
  //   })
  //   tag: Ref<Tag>[];
  @ApiProperty({ description: '文章标签', example: '标签id数组' })
  @prop()
  tag:Array<Ref<Classification>>

  // 一个
  @ApiProperty({ description: '文章分类 ', example: '分类id' })
  @prop()
  classification: Ref<Tag>;
}
