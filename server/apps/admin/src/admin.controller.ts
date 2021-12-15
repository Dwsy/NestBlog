import { Controller, Get, Ip, Redirect, Req, Res } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Browsedata } from 'libs/db/models/browsedata.model';
import { InjectModel } from 'nestjs-typegoose';
import { AdminService } from './admin.service';
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

@Controller()
export class AdminController {
  private cache = memCache;
  constructor(
    private readonly adminService: AdminService,
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
  @Get()
  @Redirect()
  async Redirect(@Ip() ip: string, @Req() req: Request) {
    let IP
    let proxyIp = req.headers['X-Real-IP'] || req.headers['x-forwarded-for'];
    // console.log(ipStr);
    if (proxyIp==undefined) {
      if (ip === '::1') {
        IP = '0.0.0.0'
      } else {
        IP = (ip.split(':'))[3]
      }
    }else{
      ip=proxyIp
    }

    let get
    if ((get = this.cache.get(ip)) === undefined) {

      let ipinfo = qqwry.searchIP(IP); //查询IP信息
      let ret = {
        ip: IP,
        ua: req.headers['user-agent'] + ' API',
        info: ipinfo,
        view: 1
      };
      var data = await this.BrowsedataModel.create(ret);
      this.cache.set(ip, { id: data._id }, 60*15);
    } else {
      await this.BrowsedataModel.findOneAndUpdate({ _id: get.id }, { $inc: { view: 1 } })
    }
    return {
      "url": 'api-docs',
      "statusCode": 302
    }
  }
}
