import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // usar somente os valores do DTO
      forbidNonWhitelisted: true, //recursar req quando passar algo que não deveria conter
      transform: true, // transformar os dados do payload na tipagem colocada no dto e no parametro da rota
    }),
  );
  await app.listen(3000);
}
bootstrap();
