import { Body, Controller, Get, Delete, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guards';
import { BuyersService } from './buyers.service';
import { Buyers } from './buyers';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('BUYERS')
@Controller('buyers')
@UseGuards(RolesGuard)
export class BuyersController {
constructor(private readonly buyersService: BuyersService){}

// Handling the get request for all seller
@Get()
@ApiOperation({summary: 'Getting all buyers'})
async getAllBuyers(): Promise<Buyers[]>{
    return await this.buyersService.findAllBuyers();
}
//Handling request for one seller
@Get(':id')
@ApiOperation({summary: 'Getting a buyer'})
async getABuyer(@Param('id', ParseIntPipe) id :number): Promise<Buyers>{
    return await this.buyersService.findABuyer(id);
}
//Handling a post request for a seller
@Post()
@ApiOperation({summary: 'Creating buyers'})
async postBuyer(@Body() buyerData: Buyers ): Promise<Buyers>{
    return await this.buyersService.addSeller(buyerData);
}
//Handling the delete request for a seller
@Delete(':id')
@ApiOperation({summary: 'Deleting a buyer'})
async deleteABuyer(@Param('id', ParseIntPipe) id :number): Promise<void>{
     await this.buyersService.deleteABuyer(id);
}

}

