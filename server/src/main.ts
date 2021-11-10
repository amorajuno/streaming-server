import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
=======

>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();

// No windows pode se usar o comando 'taskkill /F /IM node.exe' caso haja conflito na porta 3000
