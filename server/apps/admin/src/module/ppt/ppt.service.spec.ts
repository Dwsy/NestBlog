import { Test, TestingModule } from '@nestjs/testing';
import { PptService } from './ppt.service';

describe('PptService', () => {
  let service: PptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PptService],
    }).compile();

    service = module.get<PptService>(PptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
