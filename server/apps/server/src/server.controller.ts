import { FieldsService } from './module/fields/fields.service';
import { Controller, Get, Ip, Param, Redirect, Req, Res } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Browsedata } from 'libs/db/models/browsedata.model';
import { InjectModel } from 'nestjs-typegoose';
import { ServerService } from './server.service';
import memCache from 'libs/utils/memCache';
let libqqwry = require('lib-qqwry');
let qqwry = libqqwry() //初始化IP库解析器
qqwry.speed(); //启用急速模式;
// //异步查询IP段信息
// qqwry.searchIPScope("0.0.0.0","1.0.0.0",function(err,iparr){
//   console.log(iparr);
// });
//查询IP段信息,结果以可读流返回
// var ipStream = qqwry.searchIPScopeStream('0.0.0.0','1.0.0.0',{format:'json'});
// // s.pipe(fs.readFileSync(outFile))
// ipStream.pipe(process.stdout)
let authkey = process.env.authkey
@Controller()
export class ServerController {
  private cache = memCache;
  constructor(
    private readonly serverService: ServerService,
    private readonly fieldsService: FieldsService,
    @InjectModel(Browsedata)
    private BrowsedataModel: ReturnModelType<typeof Browsedata>,
  ) { }

  @Get("/ip11111")
  async ip() {
    let data = await this.BrowsedataModel.find({});
    data.forEach(async e => {
      let IP
      if (e.ip === '::1') {
        IP = '0'
      } else {
        IP = (e.ip.split(':'))[3]
      }
      let ipinfo = qqwry.searchIP(IP); //查询IP信息
      let ret = {
        ip: IP,
        info: ipinfo
      };
      console.log(await this.BrowsedataModel.findByIdAndUpdate(e._id, ret));
    });

    // this.BrowsedataModel.findByIdAndUpdate
    return data

  }
  @Get(`refresh/:${authkey}`)
  async refreshaCache(@Param('authkey') ak: String) {
    if (ak=authkey) {
      this.cache.refresh('手动操作')
      return "手动清除缓存成功"+new Date()
    }else{
      return "权限不足⛔"
    }
    
  }
  @Get(`test`)
  async test(@Param('authkey') ak: String) {    
    return this.cache.map()
  }
  @Get(`test1`)
  async test1(@Param('authkey') ak: String) {
    return this.cache.set('a',"dwsy")
  }
  @Get()
  @Redirect()
  async Redirect(@Ip() ip: string, @Req() req: Request) {
    this.fieldsService.saveUserInfo(ip, req, "swagger")
    return {
      "url": 'api-docs',
      "statusCode": 302
    }
  }
}
