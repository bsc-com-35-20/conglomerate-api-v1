import { Module } from '@nestjs/common';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buyers } from './buyers';
import { AppController } from 'src/app.controller';

@Module({
  controllers: [BuyersController],
  providers: [BuyersService]
})

@Module({
  imports: [TypeOrmModule.forFeature([Buyers])],
  controllers:[BuyersController, AppController],
  providers: [BuyersService,AppController]
})
export class BuyersModule {}
