import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationController } from './classification.controller';

describe('ClassificationController', () => {
  let controller: ClassificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationController],
    }).compile();

    controller = module.get<ClassificationController>(ClassificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
