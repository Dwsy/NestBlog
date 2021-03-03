import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import {ObjectId, Schema as MongooseSchema} from "mongoose";
import {Fields} from "./fields.model";
import {Contents} from "libs/db/models/contents.model";

@modelOptions({
  schemaOptions: {
    //自动生成创建更新时间戳
    timestamps: true,
  },
})
export class Comments {
  // 评论id自动生成


  @ApiProperty({description: '评论文章id', example: '评论文章id'})
  @prop({type: MongooseSchema.Types.ObjectId, ref: Contents})
      // @prop()
  contentsId: MongooseSchema.Types.ObjectId;

  //  无注册
  @ApiProperty({ description: '评论作者名称', example: 'Dwsy' })
  @prop()
  authorName: string;

  @ApiProperty({
    description: '评论所属内容作者id',
    example: '评论所属内容作者id',
  })
  @prop()
  authorId: string;

  @ApiProperty({ description: '评论者邮件', example: '123@qq.com' })
  @prop()
  email: string;
  @ApiProperty({ description: '评论者邮件（加密）', example: 'md5' })
  @prop()
  MD5email: string;
  @ApiProperty({ description: '评论者网址', example: 'dwsy.link:88' })
  @prop()
  url: string;

  @ApiProperty({ description: '评论者ip地址', example: '233.233.233.233' })
  @prop()
  ip: string;

  @ApiProperty({
    description: '评论者客户端',
    example:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
  })
  @prop()
  agent: string;

  @ApiProperty({ description: '评论文字', example: '评论内容' })
  @prop()
  text: string;

  @ApiProperty({
    description: '评论状态',
    example: 'approved（通过）|spam（垃圾箱）|waiting（审核中）',
  })
  @prop({ enum: ['approved', 'spam', 'waiting',''] })
  // status:'approved'|'spam'|'waiting'
  status: string;

  @ApiProperty({ description: '子评论个数', example: '3' })
  @prop()
  childNum: number;

  @ApiProperty({ description: '父级评论id', example: '父级评论id' })
  @prop({type: MongooseSchema.Types.ObjectId, ref: Comments})
  parentId: MongooseSchema.Types.ObjectId;
}
