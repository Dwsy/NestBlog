import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Theme } from 'libs/db/models/theme.model';

@Crud({
    model: Theme,
    routes: {
        create: false,
        update: false,
        delete: false,
    },
})
@Controller('api/theme')
@ApiTags('博客主题')
export class ThemeController {
    constructor(@InjectModel(Theme) private readonly model) {
    }
}
