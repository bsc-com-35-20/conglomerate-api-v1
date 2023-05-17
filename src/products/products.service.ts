import { Injectable } from '@nestjs/common';
import { Products } from './products';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>,
    ) {}
    //Method to add a product
    async addProduct(product:Products): Promise<Products>{
        return await this.productsRepository.save(product);
    }
    // method to update an order
    async UpdateProduct(id: number, data : Partial<Products>): Promise<void>{
         await this.productsRepository.update(id,data);
    }
}
