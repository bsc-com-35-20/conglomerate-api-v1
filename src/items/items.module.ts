import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { AppController } from 'src/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController]
})

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  controllers:[ItemsController, AppController],
  providers: [ItemsService,AppController]
})
export class ItemsModule {}
