import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards} from '@nestjs/common';
import { AuthGuard } from './auth.guards';
import { AuthService } from './auth.service';
import { RolesGuard } from 'src/guards/roles.guards';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('AUTHENTICATION')
@Controller('auth')
@UseGuards(new RolesGuard())
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({summary: 'Creating user login details'})
  async signIn(@Body() signInDto: { email: string; password: string }) {
    const { email, password } = signInDto;
    return this.authService.signIn(email, password);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({summary:'Check if the login worked'})
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
