import { Body, Controller, Get, Post, Param, ParseIntPipe, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService){}

// Handling the get request for all orders
@Get()
async getAllOrders(): Promise<Orders[]>{
    return await this.ordersService.findAllOrders();
}
//Handling the get request for one order
@Get(':id')
async getAnOrder(@Param('id', ParseIntPipe) id :number): Promise<Orders>{
    return await this.ordersService.findAnOrder(id);
}
//Handling the put request for an order
@Put(':id')
async updateOrder(@Param('id') id : number, @Body() orderData: Orders): Promise<void>{
  await this.ordersService.UpdateOrder(id, orderData);
}
//Handling the post request
@Post()
    async postOrder(@Body() orderData: Orders ): Promise<Orders>{
        return await this.ordersService.addOrder(orderData);
    }
}



