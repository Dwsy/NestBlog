import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from "@nestjs/swagger";


@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳 
        timestamps: true
    }
})
export class File {
    @ApiProperty({ description: '文件名', example: 'xx-xxx-xxx' })
    @prop()
    fileName: string

    @ApiProperty({ description: '文件所属文章id', example: '文章id' })
    @prop()
    contentsId: string

    @ApiProperty({ description: '文件url', example: 'http://tva1.sinaimg.cn/large/005NWBIgly1gnjj15c5fsj30w20xc4gt.jpg' })
    @prop()
    url: string

    @ApiProperty({ description: '文件类型', example: '图片|压缩包|音乐|其他' })
    @prop()
    group: 'image' | 'compressed' | 'audio' | 'other'

}