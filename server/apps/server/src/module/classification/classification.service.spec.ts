import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationService } from './classification.service';

describe('ClassificationService', () => {
  let service: ClassificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassificationService],
    }).compile();

    service = module.get<ClassificationService>(ClassificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
