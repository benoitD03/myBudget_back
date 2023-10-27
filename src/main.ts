import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // Activez cette option si vous utilisez des cookies ou des sessions
  // });
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
