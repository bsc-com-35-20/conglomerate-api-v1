import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders';


@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private readonly ordersRepository: Repository<Orders>,
    ) {}
    //Method to  get all orders
    async findAllOrders(): Promise<Orders[]>{
        return await this.ordersRepository.find();
    }
    
    //Method to get a single order
    async findAnOrder(order_id: number): Promise<Orders>{
        return await this.ordersRepository.findOne({
            where: { order_id }
        });
    }
    //Method to delete an order
    async deleteAnOrder(id : number): Promise<void>{
        await this.ordersRepository.delete(id);
    }
    //Method to create an order
    async addOrder(order:Orders): Promise<Orders>{
        return await this.ordersRepository.save(order);
    }
    // method to update an order
    async UpdateOrder(id: number, data : Partial<Orders>): Promise<void>{
         await this.ordersRepository.update(id,data);
    }


    }
    
