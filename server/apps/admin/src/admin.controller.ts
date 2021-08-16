import { Controller, Get, Ip, Redirect, Req, Res } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Browsedata } from 'libs/db/models/browsedata.model';
import { InjectModel } from 'nestjs-typegoose';
import { AdminService } from './admin.service';


@Controller()
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    @InjectModel(Browsedata)
    private BrowsedataModel: ReturnModelType<typeof Browsedata>,
  ) { }
  @Get()
  @Redirect()
  async Redirect(@Ip() ip, @Req() req: Request) {
    let ret = {ip, ua: req.headers['user-agent']+' API'};
    this.BrowsedataModel.create(ret);
    return {
      "url": req.url + 'api-docs',
      "statusCode": 302
    }
  }
}
