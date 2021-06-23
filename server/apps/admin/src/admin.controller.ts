
import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
// import { CacheService } from 'libs/utils/cache.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService,
    // private readonly cache: CacheService
    ) { }

  @Get()
  async getHello() {
    // for (let index = 0; index < 99999999999999999; index++) {
    //   console.log(index);
    // }
    // // return this.adminService.getHello();
    // await this.cache.set('username','李四');

    
    // console.log(await this.cache.get('username'));
    
    return this.adminService.getHello();
  }
}
