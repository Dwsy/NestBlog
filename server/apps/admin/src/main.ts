import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


import * as express from 'express';
import { logger } from './middleware/logger.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('博客后台管理API')
    .setVersion('0.12')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();



  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  // 监听所有的请求路由，并打印日志
  app.use(logger);


  // app.use(logger);

  const PORT = process.env.ADMIN_PORT || 2999
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)

}
bootstrap();
