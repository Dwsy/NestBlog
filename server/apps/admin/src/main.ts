import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// import { Log4jsLogger } from '@nestx-log4js/core';
import * as express from 'express';
import { logger } from './middleware/logger.middleware';

// import * as mongoose from 'mongoose';
async function bootstrap() {
  // mongoose.connect('mogodb://localhost:27017')
  const app = await NestFactory.create(AdminModule);
app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('博客后台管理API')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.enableCors();
  const PORT = process.env.ADMIN_PORT || 2999
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)

}
bootstrap();
