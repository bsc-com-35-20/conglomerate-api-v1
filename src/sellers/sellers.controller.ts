import { Controller, Get, Post, Delete, Param, Put, Body, Patch, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { Sellers } from './sellers';
import { RolesGuard } from 'src/guards/roles.guards';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('SELLERS')
@Controller('sellers')

export class SellersController {
  findAll(): any{
    throw new Error('No implementation!!!');
  }
    constructor(private readonly sellersService: SellersService){}
    @Post('login')
    @ApiOperation({summary: 'Verify login details'})
    async signIn(@Body() sellerData: Sellers ): Promise<Sellers>{
      return await this.sellersService.addSeller(sellerData);
  }

    // Handling the get request for all seller
    @Get()
    @ApiOperation({summary: 'Getting all sellers'})
    @ApiOperation({description: 'When run first, it shows empty parameters but when executed after POST , it gets all users that have been posted' })
    @ApiOkResponse({ description: 'The resources were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  findAllSellers() {
    return this.sellersService.findAllSellers();
  }
    async getAllSellers(): Promise<Sellers[]>{
        return await this.sellersService.findAllSellers();
    }
    //Handling request for one seller
    @Get(':id')
    @ApiOperation({summary: 'Getting one seller'})
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  findASeller(@Param('id') id: string) {
    return this.sellersService.findASeller(+id);
  }
    async getASeller(@Param('id', ParseIntPipe) id :number): Promise<Sellers>{
        return await this.sellersService.findASeller(id);
    }
    //Handling a post request for a seller
    @Post()
    @ApiOperation({summary: 'Creating sellers'})
    @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  addSeller(@Body() sellerData: Sellers) {
    return this.sellersService.addSeller(sellerData);
  }

    async postSeller(@Body() sellerData: Sellers ): Promise<Sellers>{
        return await this.sellersService.addSeller(sellerData);
    }
    //Handling the delete request for a seller
    @Delete(':id')
    @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  deleteASeller(@Param('id') id: string) {
    return this.sellersService.deleteAllSeller(+id);
  }
    async deleteASellers(@Param('id', ParseIntPipe) id :number): Promise<void>{
         await this.sellersService.deleteASellers(id);
    }
    //Handling the put request for a seller
   // @Patch(':id')
    //async updateSeller(@Param('id') id : number, @Body() sellerData: Sellers): Promise<void>{
      //  await this.sellersService.UpdateSeller(id, sellerData);
    //}
}

