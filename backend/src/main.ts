import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { corsConfig } from 'cors.config';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Markets example')
  .setDescription('The Markets API description')
  .setVersion('1.0')
  .addTag('Markets')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, documentFactory);

app.enableCors(corsConfig);

  await app.listen(process.env.SERVER_PORT ?? 3001);
}
bootstrap();
