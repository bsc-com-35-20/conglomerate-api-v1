import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationExceptionFilter } from './errors/validation-exception.filter';
import { HttpExceptionFilter } from './errors/http-exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Conglomerate web app')
  .setDescription('Combination of student business')
  .setVersion('1.0.4')
  .addTag('')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();