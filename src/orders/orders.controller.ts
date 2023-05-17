import { Body, Controller, Get, Post, Param, ParseIntPipe, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ORDERS')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService){}

// Handling the get request for all orders
@Get()
@ApiOperation({summary: 'Getting all orders'})
async getAllOrders(): Promise<Orders[]>{
    return await this.ordersService.findAllOrders();
}
//Handling the get request for one order
@Get(':id')
@ApiOperation({summary: 'Getting an order'})
async getAnOrder(@Param('id', ParseIntPipe) id :number): Promise<Orders>{
    return await this.ordersService.findAnOrder(id);
}
//Handling the put request for an order
@Put(':id')
@ApiOperation({summary: 'Updating an order'})
async updateOrder(@Param('id') id : number, @Body() orderData: Orders): Promise<void>{
  await this.ordersService.UpdateOrder(id, orderData);
}
//Handling the post request for an order
@Post()
@ApiOperation({summary: 'Adding an order'})
    async postOrder(@Body() orderData: Orders ): Promise<Orders>{
        return await this.ordersService.addOrder(orderData);
    }
}



