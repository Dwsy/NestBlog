import { Module } from '@nestjs/common';
import { NavigationController } from './navigation.controller';

@Module({
  controllers: [NavigationController]
})
export class NavigationModule {}
