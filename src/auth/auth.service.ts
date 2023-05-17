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
    const user = await this.BuyersService.findByEmail(email);
    if (!user || user.Password !== password) {
      throw new UnauthorizedException('Invalid. Try again');
    }

    const payload = { email: user.Email_address, sub: user.buyer_id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '60s' });

    return {
      access_token: accessToken,
    };
  }
}