import { Test, TestingModule } from '@nestjs/testing';
import { UpfileController } from './upfile.controller';

describe('UpfileController', () => {
  let controller: UpfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpfileController],
    }).compile();

    controller = module.get<UpfileController>(UpfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
