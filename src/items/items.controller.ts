import { Body, Controller, Get, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items';

@Controller('items')
export class ItemsController {
constructor(private readonly itemsService: ItemsService){}

// Handling the get request for all Items
@Get()
async getAllItems(): Promise<Items[]>{
    return await this.itemsService.findAllItems();
}
//Handling request for one item
@Get(':id')
async getAnItem(@Param('id', ParseIntPipe) id :number): Promise<Items>{
    return await this.itemsService.findAnItem(id);
}
//Handling the delete request for a seller
@Delete(':id')
async deleteAnItem(@Param('id', ParseIntPipe) id :number): Promise<void>{
     await this.itemsService.deleteAnItem(id);
}
//Handling the put request for a seller
@Put(':id')
async updateSeller(@Param('id') id : number, @Body() itemData: Items): Promise<void>{
  await this.itemsService.saveItem(id, itemData);
}
}

