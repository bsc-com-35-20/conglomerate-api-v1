import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { User } from 'src/users/users';
import { RolesGuard } from 'src/guards/roles.guards';

@Controller('auth')
@UseGuards(new RolesGuard())
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: { email: string; password: string }) {
    const { email, password } = signInDto;
    return this.authService.signIn(email, password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
