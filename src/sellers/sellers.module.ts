import { Module } from '@nestjs/common';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { Sellers } from './sellers';

@Module({
  controllers: [SellersController],
  providers: [SellersService]
})

@Module({
  imports: [TypeOrmModule.forFeature([Sellers])],
  controllers:[SellersController, AppController],
  providers: [SellersService,AppController]
})
export class SellersModule {}
