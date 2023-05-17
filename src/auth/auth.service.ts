import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { BuyersService } from 'src/buyers/buyers.service';

@Injectable()
export class AuthService {
  constructor(
    private BuyersService: BuyersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.BuyersService.findOneByEmail(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid. Try again');
    }

    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '60s' });

    return {
      access_token: accessToken,
    };
  }
}