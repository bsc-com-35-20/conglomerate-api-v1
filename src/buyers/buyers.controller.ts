import { Body, Controller, Get, Delete, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guards';
import { BuyersService } from './buyers.service';
import { Buyers } from './buyers';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('BUYERS')
@Controller('buyers')
@UseGuards(RolesGuard)
export class BuyersController {
constructor(private readonly buyersService: BuyersService){}

// Handling the get request for all buyers
@Get()
@ApiOperation({summary: 'Getting all buyers'})
@ApiOkResponse({ description: 'The resources were returned successfully' })
@ApiForbiddenResponse({ description: 'Unauthorized Request' })
findAllBuyers() {
  return this.buyersService.findAllBuyers();
}
async getAllBuyers(): Promise<Buyers[]>{
    return await this.buyersService.findAllBuyers();
}
//Handling request for one buyer
@Get(':id')
@ApiOperation({summary: 'Getting a buyer'})
@ApiOperation({summary: 'Getting one seller'})
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  findABuyer(@Param('id') id: string) {
    return this.buyersService.findABuyer(+id);
  }
async getABuyer(@Param('id', ParseIntPipe) id :number): Promise<Buyers>{
    return await this.buyersService.findABuyer(id);
}
//Handling a post request for a buyer
@Post()
@ApiOperation({summary: 'Creating buyers'})
    @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  addSeller(@Body() buyerData: Buyers) {
    return this.buyersService.addBuyer(buyerData);
  }
async postBuyer(@Body() buyerData: Buyers ): Promise<Buyers>{
    return await this.buyersService.addBuyer(buyerData);
}
//Handling the delete request for a buyer
@Delete(':id')
@ApiOperation({summary: 'Deleting a buyer'})
@ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  deleteBuyer(@Param('id') id: string) {
    return this.buyersService.deleteABuyer(+id);
  }
async deleteABuyer(@Param('id', ParseIntPipe) id :number): Promise<void>{
     await this.buyersService.deleteABuyer(id);
}

}

