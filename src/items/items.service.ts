import { Body, Injectable, Param } from '@nestjs/common';
import { Items } from './items';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
) {}
//Method to  get all items
async findAllItems(): Promise<Items[]>{
    return await this.itemsRepository.find();
}

//Method to get a single item
async findAnItem(item_id: number): Promise<Items>{
    return await this.itemsRepository.findOne({
        where: { item_id }
    });
}
//Method to delete an item
async deleteAnItem(id : number): Promise<void>{
    await this.itemsRepository.delete(id);
}
// Method to save an item
    async saveItem (id : number, @Body() itemData: Items): Promise<void>{
        await this.itemsRepository.save(itemData);
    }

}
