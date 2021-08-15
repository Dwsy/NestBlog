import { Injectable } from '@nestjs/common';
import memCache from "../../../../../libs/utils/memCache";
import axios from 'axios';

@Injectable()

export class ThemeService {
    async getPixiv() {
        let cache =  memCache.get('pixiv')
        if (cache !== undefined) {
            return cache;
        }
        let pd = (await axios.get('http://cloud.mokeyjay.com/pixiv/storage/app/pixiv.json')).data;
        memCache.set('pixiv', pd,43200)

        console.log("redis更新pixiv");
        return pd
    }
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
        // console.log(tab)
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
