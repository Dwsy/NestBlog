import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';

@Module({
    controllers: [LinksController]
})
export class LinksModule {}
