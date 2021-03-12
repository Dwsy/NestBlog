import { Test, TestingModule } from '@nestjs/testing';
import { PptController } from './ppt.controller';

describe('PptController', () => {
  let controller: PptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PptController],
    }).compile();

    controller = module.get<PptController>(PptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
