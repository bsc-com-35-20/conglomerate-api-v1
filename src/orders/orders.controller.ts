import { Body, Controller, Get, Post, Param, ParseIntPipe, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('ORDERS')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService){}

// Handling the get request for all orders
@Get()
@ApiOperation({summary: 'Getting all orders'})
@ApiOkResponse({ description: 'The resources were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  findAllOrders() {
    return this.ordersService.findAllOrders();
  }
async getOrders(): Promise<Orders[]>{
    return await this.ordersService.findAllOrders();
}
//Handling the get request for one order
@Get(':id')
@ApiOperation({summary: 'Getting an order'})
@ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  findAnOrder(@Param('id') id: string) {
    return this.ordersService.findAnOrder(+id);
  }
async getAnOrder(@Param('id', ParseIntPipe) id :number): Promise<Orders>{
    return await this.ordersService.findAnOrder(id);
}
//Handling the put request for an order
@Put(':id')
@ApiOperation({summary: 'Updating an order'})
@ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  updateOrder(@Param('id') id: string, @Body() orderData: Orders) {
    return this.ordersService.UpdateOrder(+id,orderData);
  }
async update(@Param('id') id : number, @Body() orderData: Orders): Promise<void>{
  await this.ordersService.UpdateOrder(id, orderData);
}
//Handling the post request for an order
@Post()
@ApiOperation({summary: 'Adding an order'})
@ApiOperation({summary: 'Creating sellers'})
    @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  addOrder(@Body() orderData: Orders) {
    return this.ordersService.addOrder(orderData);
  }
    async postOrder(@Body() orderData: Orders ): Promise<Orders>{
        return await this.ordersService.addOrder(orderData);
    }
}



