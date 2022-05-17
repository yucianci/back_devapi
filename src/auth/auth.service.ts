import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUserValidator } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async UserValidator(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);
    if (user && user.password === password) {
      const { _id, email } = user;
      return { id: _id, email };
    }
    return null;
  }

  async login(user: IUserValidator) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
