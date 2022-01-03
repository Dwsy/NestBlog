import { Controller } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { PptOptions } from 'libs/db/models/ppt.model';
import { PptService } from './ppt.service';

@Crud({
    model: PptOptions,
    routes: {
        // find: false
        // // create: false,
        // update: false,
        // delete: false
    }
})
@Controller('api/ppt')
@ApiTags('博客首页轮播图设置')
export class PptController {
    constructor(
        @InjectModel(PptOptions) private readonly model,
        private readonly pptService: PptService,
    ) {
    }
}
