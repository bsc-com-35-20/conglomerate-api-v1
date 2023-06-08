import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sellers } from './sellers';

@Injectable()
export class SellersService {
    deleteASellers(id: number) {
      throw new Error('Method not implemented.');
    }
    findAll() {
      throw new Error('Method not implemented.');
    }
    remove(arg0: number) {
      throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Sellers)
        private readonly userRepository: Repository<Sellers>,
    ) {}
    //Method to  get all sellers
    async findAllSellers(): Promise<Sellers[]>{
        return await this.userRepository.find();
    }

    //Method to get a single seller
    async findASeller(seller_id: number): Promise<Sellers>{
        return await this.userRepository.findOne({
            where: { seller_id }
        });
    }
    //Method to delete a seller
    async deleteAllSeller(id : number): Promise<void>{
        await this.userRepository.delete(id);
    }
    //Method to create a user
    async addSeller(seller:Sellers): Promise<Sellers>{
        return await this.userRepository.save(seller);
    }
    async UpdateSeller(id: number, data : Partial<Sellers>): Promise<void>{
         await this.userRepository.update(id,data);
    }


}
