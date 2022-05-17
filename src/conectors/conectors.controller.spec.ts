import { Test, TestingModule } from '@nestjs/testing';
import { ConectorsController } from './conectors.controller';
import { ConectorsService } from './conectors.service';

describe('ConectorsController', () => {
  let controller: ConectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConectorsController],
      providers: [ConectorsService],
    }).compile();

    controller = module.get<ConectorsController>(ConectorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
