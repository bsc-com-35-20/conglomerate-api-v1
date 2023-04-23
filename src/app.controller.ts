import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): string {
    return this.appService.getPosts();
  }

  @Post()
  //do aom
  getPosts2(): string {
    return this.appService.getPosts();
  }
}
