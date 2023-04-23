import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellersModule } from './sellers/sellers.module';
import { Sellers } from './sellers/sellers';

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
  }), SellersModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
