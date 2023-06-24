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
import { AuthService } from './auth/auth.service';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { Orders } from './orders/orders';
import { Products } from './products/products';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    //host: 'localhost',
    host: 'sql12.freesqldatabase.com',
    //port: 3000,
    port: 3306,
    //username: 'chisomo',
    username: 'sql12628390',
    //password: '12345678',
    password: 'KcJMwUzlp9',
    //database: 'conglomerate_api',
    database: 'sql12628390',
    entities: [Sellers, Buyers, Items, Orders, Products],
    synchronize: true,  
  }),
    TypeOrmModule.forFeature([Sellers, Buyers, Items, Orders, Products]),
   SellersModule,
   BuyersModule,
   ItemsModule,
   OrdersModule,
   AuthModule,
   ProductsModule,
  ],
  
  controllers: [AppController],
  providers: [ AppService,
    HttpAdapterHost,
      ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(SellersController);
  }
}
