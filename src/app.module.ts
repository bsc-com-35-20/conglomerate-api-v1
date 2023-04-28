import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellersModule } from './sellers/sellers.module';
import { Sellers } from './sellers/sellers';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { SellersController } from './sellers/sellers.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'chisomo',
    password: '12345678',
    database: 'conglomerate_api',
    entities: [Sellers],
    synchronize: true,  
  }),
    TypeOrmModule.forFeature([Sellers]),
   SellersModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(SellersController);
  }
}
