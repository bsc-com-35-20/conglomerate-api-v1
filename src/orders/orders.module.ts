import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { Orders } from './orders';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController]
})
@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers:[OrdersController, AppController],
  providers: [OrdersService,AppController]
})
export class OrdersModule {}
