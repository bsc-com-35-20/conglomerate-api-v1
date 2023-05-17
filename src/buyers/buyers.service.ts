import { Injectable } from '@nestjs/common';
import { Buyers } from './buyers';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuyersService {
constructor(
    @InjectRepository(Buyers)
    private readonly buyerRepository: Repository<Buyers>,
) {}
//Method to  get all buyers
async findAllBuyers(): Promise<Buyers[]>{
    return await this.buyerRepository.find();
}

//method for authentication
async findByEmail (Email_address: string): Promise<Buyers | undefined> {
    return this.buyerRepository.findOne({ where: { Email_address }});
}

//Method to get a single buyer
async findABuyer(buyer_id: number): Promise<Buyers>{
    return await this.buyerRepository.findOne({
        where: { buyer_id }
    });
}
//Method to delete a buyer
async deleteAllBuyer(id : number): Promise<void>{
    await this.buyerRepository.delete(id);
}
//Method to create a buyer
async addSeller(buyer:Buyers): Promise<Buyers>{
    return await this.buyerRepository.save(buyer);
}
async UpdateSeller(id: number, data : Partial<Buyers>): Promise<void>{
     await this.buyerRepository.update(id,data);
}
}