import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DbModule,
    UsersModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
