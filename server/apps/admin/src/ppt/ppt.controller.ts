import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { SettingOptions } from 'libs/db/models/settingoptions.model';


@Crud({

    model:SettingOptions,

  
})
@Controller('settingoptions')
@ApiTags('博客设置')
export class SettingoptionsController {
    constructor(@InjectModel(SettingOptions) private readonly model) { }
}