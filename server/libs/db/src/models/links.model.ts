import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
//博客设置
export class Links {
    @ApiProperty({description: '友链地址', example: ''})
    @prop()
    linksUrl: String;
    @ApiProperty({description: '友链名称', example: ''})
    @prop()
    linksName: String;
    @ApiProperty({description: '友链头像', example: ''})
    @prop()
    linksAvatar: String;
    @ApiProperty({description: '友链邮箱', example: ''})
    @prop()
    linksEmail: String;
    @ApiProperty({description: '友链简述', example: ''})
    @prop()
    linksDescription: String;
    @ApiProperty({description: '友链排序', example: ''})
    @prop()
    rank: number;
}
