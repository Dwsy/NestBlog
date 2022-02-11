import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as express from 'express';
import { logger } from './middleware/logger.middleware';

import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
// import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
// https
// const httpsOptions = {
//   key: fs.readFileSync('/root/SSL/key'),
//   cert: fs.readFileSync('/root/SSL/pem'),
// };
// https
async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(ServerModule, new ExpressAdapter(server));

  // const app = await NestFactory.create(ServerModule);
  app.enableCors();
  app.use(bodyParser.json({limit: '50mb'})); 
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
  const HTTP_PORT = process.env.ADMIN_PORT || 2999;
  const HTTPS_PORT = 3030;

  http.createServer(server).listen(HTTP_PORT);

  // https
  // https.createServer(httpsOptions, server).listen(HTTPS_PORT);
  // https

  // await app.listen(PORT);
  // console.log(JSON.parse(process.env.npm_config_argv)['original'][-1]);

  console.log(`http://localhost:${HTTP_PORT}/api-docs`)
  console.log("-----------------------------------------");
  console.log(`https://localhost:${HTTPS_PORT}/api-docs默认关闭打开需注释main.ts中https配置`)
}
bootstrap();
