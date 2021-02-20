import { prop,modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from "@nestjs/swagger";


@modelOptions({
    schemaOptions:{
        //自动生成创建更新时间戳 
        timestamps:true
    }
})
export class Contents{
    // 文章id自动生成
    @ApiProperty({description:'标题',example:'标题'})
    @prop()
    title:string

    // @ApiProperty({description:'文章类型',example:'文章|独立页面'})
    // @prop()
    // isContents:boolean

    @ApiProperty({description:'内容文字',example:'text文字'})
    @prop()
    text:string

    // @ApiProperty({description:'内容类别',example:'page/post/file'})
    // @prop()
    // type:string

    @ApiProperty({description:'内容状态',example:true})
    @prop()
    // status:password
    isPublish:boolean

    @ApiProperty({description:'评论数',example:'123'})
    @prop()
    commentsNum:Number

    @ApiProperty({description:'是否允许评论',example:true})
    @prop()
    allowComment:boolean

    // allowPing

    @ApiProperty({description:'允许出现在聚合中',example:true})
    @prop()
    allowFeed:boolean

}