import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sellers } from 'src/sellers/sellers';
import { Buyers } from 'src/buyers/buyers';
import { BuyersService } from 'src/buyers/buyers.service';
import { BuyersModule } from 'src/buyers/buyers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Buyers]),
    BuyersModule,
    JwtModule.register({
      global: true,
      secret: 'fjshriwery8wyorwejporw0t09wu498t4ih78y42rchgfyufuyrytrsw8857644ghh892uc09ur23h',
      signOptions: { expiresIn: '60s' },
    }),
  ],

  providers: [AuthService, BuyersService],
  controllers: [AuthController],
})

export class AuthModule {}
