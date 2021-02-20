import { prop,modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from "@nestjs/swagger";


@modelOptions({
    schemaOptions:{
        //自动生成创建更新时间戳 
        timestamps:true
    }
})
//文章自定义字段
export class Fields{


    @ApiProperty({ description: '文章id', example: 'id' })
    @prop()
    contentsId:string
    
    @ApiProperty({ description: '文章封面大url', example: '文章封面大' })
    @prop()
    cover: string

    @ApiProperty({ description: '文章封面小url', example: '文章封面小' })
    @prop()
    coverSmall: string

    @ApiProperty({ description: '文章选择标签', example: '标签id数组' })
    @prop()
    metas: Array<string>





}