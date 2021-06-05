import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get()
  getHello() {
    for (let index = 0; index < 99999999999999999; index++) {
      console.log(index);
    }
    // return this.adminService.getHello();
    return this.adminService.getHello();
  }
}
