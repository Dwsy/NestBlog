import {ApiProperty} from '@nestjs/swagger';
import {Schema as MongooseSchema, Types} from 'mongoose';
import {Comments} from 'libs/db/models/comments.model';
import {prop} from '@typegoose/typegoose';

export class sendChildCommentDto {
    @ApiProperty({description: '评论文章id', example: '评论文章id'})
    contentsId: string;
    // @ApiProperty({description: 'fieldsId', example: 'fieldsId'})
    // @prop({type: MongooseSchema.Types.ObjectId, ref: Fields})
    // fieldsId: Array<MongooseSchema.Types.ObjectId>
    @ApiProperty({
        description: '评论所属内容作者id',
        example: '评论所属内容作者id',
    })
    authorId: string;
    @ApiProperty({description: '评论作者名称', example: 'Dwsy'})
    authorName: string;
    @ApiProperty({description: '评论文字', example: '评论内容'})
    text: string;
    @ApiProperty({description: '评论者ip地址', example: '233.233.233.233'})
    ip: string;
    @ApiProperty({description: '评论者网址', example: 'dwsy.link:88'})
    url: string;
    @ApiProperty({description: '评论者邮件（加密）', example: 'md5'})
    MD5email: string;
    @ApiProperty({description: '评论者邮件', example: '1@1.c'})
    email: string;
    @ApiProperty({
        description: '评论者客户端',
        example:
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
    })
    @prop()
    agent: string;
    @ApiProperty({description: 'isChild', example: false})
    @prop()
    isChild: boolean;
    @ApiProperty({description: 'childId', example: 'childId'})
    @prop({type: MongooseSchema.Types.ObjectId, ref: Comments})
    childId: Array<MongooseSchema.Types.ObjectId>;

    @ApiProperty({description: '父评论id'})
    fatherId: string;
}
