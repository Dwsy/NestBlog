import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


import * as express from 'express';
import { logger } from './middleware/logger.middleware';

import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import { ValidationPipe } from '@nestjs/common';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';

const httpsOptions = {
  key: fs.readFileSync('/root/SSL/key'),
  cert: fs.readFileSync('/root/SSL/pem'),
  // key: fs.readFileSync('E:\\code\\my\\blog\\server\\SSL\\key'),
  // cert: fs.readFileSync('E:\\code\\my\\blog\\server\\SSL\\pem'),
};

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(
    AdminModule,
    new ExpressAdapter(server),
  );

  // const app = await NestFactory.create(AdminModule);
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
  await app.init();
  const PORT = process.env.ADMIN_PORT || 2999
  http.createServer(server).listen(PORT);
  https.createServer(httpsOptions, server).listen(3030);
  // const PORT = process.env.ADMIN_PORT || 2999
  // await app.listen(PORT);
  // console.log(`http://localhost:${PORT}/api-docs`)

}
bootstrap();
