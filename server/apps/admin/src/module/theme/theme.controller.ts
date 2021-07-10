import { Controller, Get } from '@nestjs/common';
import { Crud } from 'libs/nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Theme } from 'libs/db/models/theme.model';
import axios from 'axios';
import { CacheService } from '../../cache/cache.service';

let data = null
let date = 0
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
    constructor(@InjectModel(Theme) private readonly model,private readonly cache: CacheService,) { }
    @Get('pixiv')
// mem
    async get() {
        if (date + 43200000 > (new Date()).getTime()) {
            console.log("使用mem缓存pixiv");
            return data
        }
        //api www.mokeyjay.com
        data = (await axios.get('http://cloud.mokeyjay.com/pixiv/storage/app/pixiv.json')).data
        date = (new Date()).getTime()
        console.log("mem更新pixiv");
        return data
        // console.log(date.getTime());
    }
// redis
    @Get('pixiv1')
    async get0() {
        let cache = await this.cache.get('pixiv')
        if (cache !== null) {            
            if ( cache.date + 43200000 > (new Date()).getTime()) {
                console.log("使用redis缓存pixiv");
                return cache.data;
            }
        }
        await this.cache.set('pixiv', {
            data:(await axios.get('http://cloud.mokeyjay.com/pixiv/storage/app/pixiv.json')).data,
            date:(new Date()).getTime()
        })
        cache = await this.cache.get('pixiv')
        console.log(cache.data);
        console.log("redis更新pixiv");
        return cache.data
    }

}
