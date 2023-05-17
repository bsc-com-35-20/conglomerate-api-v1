import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { Products } from './products';
import { ProductsService } from './products.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

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
    async postProduct(@Body() productData: Products ): Promise<Products>{
        return await this.productsService.addProduct(productData);
    }
}
