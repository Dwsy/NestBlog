import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { SettingOptions } from 'libs/db/models/ppt.model';


@Crud({

    model:SettingOptions,


})
@Controller('ppt')
@ApiTags('博客首页轮播图设置')
export class SettingoptionsController {
    constructor(@InjectModel(SettingOptions) private readonly model) { }
}
