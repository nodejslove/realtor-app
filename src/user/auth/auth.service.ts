import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'auth service results';
  }
}
