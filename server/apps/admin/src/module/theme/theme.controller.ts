import { Controller, Get } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Theme } from 'libs/db/models/theme.model';
import axios from 'axios';



@Crud({
    model: Theme,
    routes: {
        // create: false,
        // update: false,
        // delete: false
    }
})

@Controller('api/theme')
@ApiTags('博客主题')
export class ThemeController {
    constructor(@InjectModel(Theme) private readonly model) { }
    @Get('pixiv')
    async get() {
        //api www.mokeyjay.com
        return (await axios.get('http://cloud.mokeyjay.com/pixiv/storage/app/pixiv.json')).data
    }
}
