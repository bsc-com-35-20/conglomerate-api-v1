import { BadRequestException } from '@nestjs/common';

export class AppException extends BadRequestException {
  constructor(message: string) {
    super(message);
  }
}
