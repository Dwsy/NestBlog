import {prop, modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';

@modelOptions({
    schemaOptions: {
        //自动生成创建更新时间戳
        timestamps: true,
    },
})
export class fieldsIndexSummaryDto {

  //summary
  @ApiProperty({ description: 'summary', example: 'summary' })
  @prop()
  menus: {
      // menusHtml:string,
      menus: string;
      summary: string;
  };

}
