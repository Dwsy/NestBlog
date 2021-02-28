import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as mongoose from 'mongoose';
async function bootstrap() {
  // mongoose.connect('mogodb://localhost:27017')
  const app = await NestFactory.create(AdminModule);

  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('博客后台管理API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();
  await app.listen(3000);
  console.log('http://localhost:3000/api-docs');

}
bootstrap();
