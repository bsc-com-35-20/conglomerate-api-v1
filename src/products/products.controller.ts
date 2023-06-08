import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { Products } from './products';
import { ProductsService } from './products.service';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { type } from 'os';

@ApiTags('PRODUCTS')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

// Handling the put request for a product
@Put(':id')
@ApiOperation({summary: 'Updating a product'})
async updateProduct(@Param('id') id : number, @Body() productData: Products): Promise<void>{
  await this.productsService.UpdateProduct(id, productData);
}
//Handling the post request for a product
@Post()
@ApiOperation({summary: 'Adding products'})
@ApiOperation({summary: 'Creating sellers'})
    @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  addProduct(@Body() products: Products) {
    return this.productsService.addProduct(products);
  }
    async postProduct(@Body() products: Products ): Promise<Products>{
        return await this.productsService.addProduct(products);
    }
}
