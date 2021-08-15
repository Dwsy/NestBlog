import {Controller, Get} from '@nestjs/common';
import {Crud} from 'libs/nestjs-mongoose-crud';
import {InjectModel} from 'nestjs-typegoose';
import {ApiTags} from '@nestjs/swagger';
import {Theme} from 'libs/db/models/theme.model';
import axios from 'axios';
// import {CacheService} from '../../cache/cache.service';
import memCache from "../../../../../libs/utils/memCache";

let tab = require('./data')
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
    private cache= memCache;
    constructor(@InjectModel(Theme) private readonly model) {
    }

    @Get('pixiv')
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

    redis
    @Get('pixiv1')
    async get0() {
        let cache =  this.cache.get('pixiv')
        if (cache !== undefined) {
            return cache;
        }
        let pd = (await axios.get('http://cloud.mokeyjay.com/pixiv/storage/app/pixiv.json')).data;
        this.cache.set('pixiv', pd,43200)
        cache =  this.cache.get('pixiv')
        console.log(cache['value']);
        console.log("redis更新pixiv");
        return cache['value']
    }

    @Get('icon')
    async image() {
        // <link href="/css/csdn_feed.css?1627614636" rel="stylesheet">
        let html = await (await axios.get('https://blog.csdn.net/')).data
        // console.log(html);

        // var matchReg = /<link.*?\.rel="stylesheet">/gi;
        // <span>830

        var ret = html.match(/\href.*?\stylesheet/g)

        console.log(ret);
        return ret
    }

    @Get('tab')
    async tab() {
        // {
        //     "name": "Mozilla 开发者网络",
        //     "url": "https://developer.mozilla.org/zh-CN/",
        //     "icon": "https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png",
        //     "des": "Mozilla 开发者网络（MDN）提供有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。它还记录了  Mozilla 产品的文档，例如 Firefox OS。",
        //     "tags": [
        //         "社区"
        //     ]
        // },
        let url = 'https://infinity-api.infinitynewtab.com/c/i13EJi'
        let tabdata = (await axios.get(url)).data
        let v: Array<object> = tabdata.data
        var r = []
        console.log(tab)
        for (const element of v) {
            // const index = v.indexOf(element);
            if (element['imageType'] !== 'folder') {
                if (element['src'] !== undefined && element['src'] !== '') {
                    let t = {
                        "name": element['name'],
                        "url": element['url'],
                        "icon": element['src'],
                        "des": element['showText'],
                        "tags": [
                            "社区"
                        ]
                    }
                    r.push(t)
                } else {
                    // let url:Array<string> = element['url']?.split('/')
                    // console.log(url);
                    // let html = await axios.get(element['url'])
                    // console.log(html.data);

                    // if (url[2]!==undefined) {
                    //     console.log(url[2]+'/favicon.ico');
                    // }
                    // favicon.ico
                    // r[index] = {
                    //     "name": element['name'],
                    //     "url": url[2]+'/favicon.ico',
                    //     "icon": element['src'],
                    //     "des": element['showText'],
                    //     "tags": [
                    //         "社区"
                    //     ]
                    // }
                    console.log("------------");

                }
            } else {
                console.log("123------")
                    for (let k of element['items']) {
                        let t = {
                            "name": k['name'],
                            "url": k['url'],
                            "icon": k['src'],
                            "des": k['showText'],
                            "tags": [
                                element['name']
                            ]
                        }
                        console.log( k)
                        r.push(t)
                        console.log("push------")
                    }


            }


        }
        return r
    }

}
