import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class UsersSeed {
  constructor(private readonly usersService: UsersService) {}
  @Command({
    command: 'create:user',
    describe: 'create a user',
  })
  async create() {
    await this.usersService.addSeed({
      name: 'User devapi',
      email: 'user@devapi.com',
      password: '123',
      deleted_at: null,
    });
  }
}
