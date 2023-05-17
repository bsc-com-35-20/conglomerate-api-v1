import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellersModule } from './sellers/sellers.module';
import { Sellers } from './sellers/sellers';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { SellersController } from './sellers/sellers.controller';
import { BuyersModule } from './buyers/buyers.module';
import { Buyers } from './buyers/buyers';
import { ItemsModule } from './items/items.module';
import { OrdersModule } from './orders/orders.module';
import { Items } from './items/items';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'chisomo',
    password: '12345678',
    database: 'conglomerate_api',
    entities: [Sellers, Buyers, Items],
    synchronize: true,  
  }),
    TypeOrmModule.forFeature([Sellers, Buyers]),
   SellersModule,
   BuyersModule,
   ItemsModule,
   OrdersModule,
   AuthModule,
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
