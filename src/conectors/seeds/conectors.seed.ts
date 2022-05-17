import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ConectorsService } from '../conectors.service';

@Injectable()
export class ConectorsSeed {
  constructor(private readonly conectorsService: ConectorsService) {}
  @Command({
    command: 'create:conector',
    describe: 'create a connector',
  })
  async create() {
    await this.conectorsService.addSeed({
      name: 'Connector devapi',
      type: 'REST',
      privacity: 'PUBLIC',
      category: 'dev',
      deleted_at: null,
    });
  }
}
