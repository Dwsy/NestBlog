import {prop, modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';


@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
export class Navigation {
    @ApiProperty({description: 'icon', example: 'mdi-triforce'})
    @prop()
    icon: string;
    @ApiProperty({description: 'icon-alt', example: 'mdi-chevron-down'})
    @prop()
    iconAlt: string;
    @ApiProperty({description: 'text', example: 'text'})
    @prop()
    text: string;

    @ApiProperty({description: 'link', example: 'link'})
    @prop()
    link: string;

    @ApiProperty({description: 'haveChildren', example: 'false'})
    @prop()
    haveChildren: boolean;

    @ApiProperty({description: 'childrenId', example: '["6039284a2684e22ec8291c64","603928522684e22ec8291c65","603928552684e22ec8291c66","603928572684e22ec8291c67"]'})
    @prop()
        // 分类子导航
    childrenId: Array<any>;

    @ApiProperty({description: 'rank', example: '1'})
    @prop()
    rank: number;
}

