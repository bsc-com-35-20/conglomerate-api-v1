import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('APP')
@Controller()
export class AppController {
  
}
