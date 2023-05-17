import { Controller, Get, Post, Delete, Param, Put, Body, Patch, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { Sellers } from './sellers';
import { RolesGuard } from 'src/guards/roles.guards';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('SELLERS')
@Controller('sellers')
@UseGuards(RolesGuard)
export class SellersController {
    constructor(private readonly sellersService: SellersService){}

    // Handling the get request for all seller
    @Get()
    @ApiOperation({summary: 'Getting all sellers'})
    async getAllSellers(): Promise<Sellers[]>{
        return await this.sellersService.findAllSellers();
    }
    //Handling request for one seller
    @Get(':id')
    @ApiOperation({summary: 'Getting one seller'})
    async getASeller(@Param('id', ParseIntPipe) id :number): Promise<Sellers>{
        return await this.sellersService.findASeller(id);
    }
    //Handling a post request for a seller
    @Post()
    @ApiOperation({summary: 'Creating sellers'})
    async postSeller(@Body() sellerData: Sellers ): Promise<Sellers>{
        return await this.sellersService.addSeller(sellerData);
    }
    //Handling the delete request for a seller
    @Delete(':id')
    @ApiOperation({summary: 'Deting a seller'})
    async deleteASellers(@Param('id', ParseIntPipe) id :number): Promise<void>{
         await this.sellersService.deleteAllSeller(id);
    }
    //Handling the put request for a seller
   // @Patch(':id')
    //async updateSeller(@Param('id') id : number, @Body() sellerData: Sellers): Promise<void>{
      //  await this.sellersService.UpdateSeller(id, sellerData);
    //}
}

