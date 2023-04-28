import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationExceptionFilter } from './errors/validation-exception.filter';
import { HttpExceptionFilter } from './errors/http-exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationExceptionFilter());
  
  await app.listen(3000);
}
bootstrap();