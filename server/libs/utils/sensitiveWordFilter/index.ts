import axios from 'axios';
/**
 * @Description: 封装评论脱敏方法
 */
// const Mint = require('mint-filter').default
import Mint, { FilterValue } from 'mint-filter'
import fs from 'fs'
let mint: Mint = null
export class swf {
    async setWordsOfurl(url: string) {
        let data = (await axios.get(url)).data
        let words: Array<string> = data.split(/[(\r\n)\r\n]+/);
        words.forEach((item, index) => {
            if (!item) {
                words.splice(index, 1);//删除空项
            }
        })
        mint = new Mint(words)
    }
    setWordsOftext(path: string) {
        let data = fs.readFileSync(path, 'utf-8')
        let words: Array<string> = data.split(/[(\r\n)\r\n]+/);
        words.forEach((item, index) => {
            if (!item) {
                words.splice(index, 1);//删除空项
            }
        })
        mint = new Mint(words)
    }
    setWordsOfCustom(words: Array<string>) {
        mint = new Mint(words)
    }
    get(): Mint {
        return mint
    }
}
export default new swf