import { Body, Controller, Get, Delete, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guards';
import { BuyersService } from './buyers.service';
import { Buyers } from './buyers';

@Controller('buyers')
@UseGuards(RolesGuard)
export class BuyersController {
constructor(private readonly buyersService: BuyersService){}

// Handling the get request for all seller
@Get()
async getAllSellers(): Promise<Buyers[]>{
    return await this.buyersService.findAllBuyers();
}
//Handling request for one seller
@Get(':id')
async getASeller(@Param('id', ParseIntPipe) id :number): Promise<Buyers>{
    return await this.buyersService.findABuyer(id);
}
//Handling a post request for a seller
@Post()
async postSeller(@Body() buyerData: Buyers ): Promise<Buyers>{
    return await this.buyersService.addSeller(buyerData);
}
//Handling the delete request for a seller
@Delete(':id')
async deleteASellers(@Param('id', ParseIntPipe) id :number): Promise<void>{
     await this.buyersService.deleteAllBuyer(id);
}
//Handling the put request for a seller
// @Patch(':id')
//async updateSeller(@Param('id') id : number, @Body() sellerData: Sellers): Promise<void>{
  //  await this.sellersService.UpdateSeller(id, sellerData);
//}
}

