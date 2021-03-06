import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { PptOptions } from 'libs/db/models/ppt.model';


@Crud({

    model:PptOptions,
    // routes: {
    //     // create: false,
    //     update: false,
    //     delete: false
    // }

})
@Controller('api/ppt')
@ApiTags('博客首页轮播图设置')
export class PptController {
    constructor(@InjectModel(PptOptions) private readonly model) { }
}
