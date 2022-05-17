import { Module } from '@nestjs/common';
import { ConectorsService } from './conectors.service';
import { ConectorsController } from './conectors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Conector, ConectorSchema } from './entities/conector.entity';
import { ConectorsSeed } from './seeds/conectors.seed';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Conector.name, schema: ConectorSchema },
    ]),
  ],
  controllers: [ConectorsController],
  providers: [ConectorsService, ConectorsSeed],
})
export class ConectorsModule {}
