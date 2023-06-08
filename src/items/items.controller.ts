import { Body, Controller, Get, Delete, Param, Put, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ITEMS')
@Controller('items')
export class ItemsController {
constructor(private readonly itemsService: ItemsService){}

// Handling the get request for all Items
@Get()
@ApiOperation({summary: 'Getting all items'})
@ApiOkResponse({ description: 'The resources were returned successfully' })
@ApiForbiddenResponse({ description: 'Unauthorized Request' })
findAllItems() {
  return this.itemsService.findAllItems();
}
async getAllItems(): Promise<Items[]>{
    return await this.itemsService.findAllItems();
}
//Handling request for one item
@Get(':id')
@ApiOperation({summary: 'Getting an item'})
@ApiOperation({summary: 'Getting a buyer'})
@ApiOperation({summary: 'Getting one seller'})
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  findOne(@Param('id') id: string) {
    return this.itemsService.findAnItem(+id);
  }
async getAnItem(@Param('id', ParseIntPipe) id :number): Promise<Items>{
    return await this.itemsService.findAnItem(id);
}
//Handling the delete request for a seller
@Delete(':id')
@ApiOperation({summary: 'Deleting an item'})
@ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  deleteBuyer(@Param('id') id: string) {
    return this.itemsService.deleteAnItem(+id);
  }
async deleteAnItem(@Param('id', ParseIntPipe) id :number): Promise<void>{
     await this.itemsService.deleteAnItem(id);
}
//Handling the put request for a seller
@Put(':id')
@ApiOperation({summary: 'Updating an item'})
@ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  saveItem(@Param('id') id: string, @Body() itemData: Items) {
    return this.itemsService.saveItem(+id,itemData);
  }
async updateSeller(@Param('id') id : number, @Body() itemData: Items): Promise<void>{
  await this.itemsService.saveItem(id, itemData);
}
}

