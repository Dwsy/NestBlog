import {Controller, Get} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Theme} from 'libs/db/models/theme.model';
// import {CacheService} from '../../cache/cache.service';
import memCache from '../../../../../libs/utils/memCache';
import {ThemeService} from './theme.service';

let tab = require('./data');
let data = null;
let date = 0;

@Crud({
    model: Theme,
    routes: {
        // create: false,
        // update: false,
        // delete: false
    },
})
@Controller('api/theme')
@ApiTags('博客主题')
export class ThemeController {
    private cache = memCache;

    constructor(
        @InjectModel(Theme) private readonly model,
        private readonly themeService: ThemeService,
    ) {
    }

    @Get('pixiv')
    async get() {
        return this.themeService.getPixiv();
    }

    @Get('icon')
    async image() {
        return this.themeService.image();
    }

    @Get('tab')
    async tab() {
        return this.themeService.tab();
    }
}
