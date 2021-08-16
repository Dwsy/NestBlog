import {prop, modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';
import {Schema as MongooseSchema} from 'mongoose';
import {Fields} from './fields.model';

@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
export class Contents {
    // 文章id自动生成
    // @ApiProperty({ description: '文章自定义字段id', example: 'id' })
  // @prop({type: MongooseSchema.Types.ObjectId, ref: Fields})
  // // @prop()
  // contentsId: MongooseSchema.Types.ObjectId;

  @ApiProperty({ description: '文章自定义字段id', example: '' })
  @prop()
  fieldsId: string;

  // @ApiProperty({description:'文章类型',example:'文章|独立页面'})
  // @prop()
  // isContents:boolean

  //渲染-html
  @ApiProperty({ description: '渲染-html', example: 'text文字' })
  @prop()
  text: string;
  //Markdown
  @ApiProperty({ description: 'Markdown', example: 'Markdown' })
  @prop()
  mdText: string;

  //目录
  @ApiProperty({ description: '目录', example: '目录' })
  @prop()
  menus: {
      // menusHtml:string,
      menus: string;
      summary: string;
  };

  //目录
  // @ApiProperty({description:'内容类别',example:'page/post/file'})
  // @prop()
  // type:string

  @ApiProperty({ description: '内容状态(是否公开)', example: true })
  @prop()
  // status:password
  isPublish: boolean;

  @ApiProperty({ description: '是否允许评论', example: true })
  @prop()
  allowComment: boolean;

  // allowPing

  // @ApiProperty({ description: '允许出现在聚合中', example: true })
  // @prop()
  // allowFeed: boolean;
}
