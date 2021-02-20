import { prop,modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from "@nestjs/swagger";


@modelOptions({
    schemaOptions:{
        //自动生成创建更新时间戳 
        timestamps:true
    }
})
//后台设置 
export class User{


}