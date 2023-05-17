import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { Products } from './products';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController]
})
@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers:[ProductsController, AppController],
  providers: [ProductsService,AppController]
})
export class ProductsModule {}
