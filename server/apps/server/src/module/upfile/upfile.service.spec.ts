import { Test, TestingModule } from '@nestjs/testing';
import { UpfileService } from './upfile.service';

describe('UpfileService', () => {
  let service: UpfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpfileService],
    }).compile();

    service = module.get<UpfileService>(UpfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
