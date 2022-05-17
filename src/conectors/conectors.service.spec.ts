import { Test, TestingModule } from '@nestjs/testing';
import { ConectorsService } from './conectors.service';

describe('ConectorsService', () => {
  let service: ConectorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConectorsService],
    }).compile();

    service = module.get<ConectorsService>(ConectorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
