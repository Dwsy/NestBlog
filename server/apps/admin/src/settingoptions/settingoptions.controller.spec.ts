import { Test, TestingModule } from '@nestjs/testing';
import { SettingoptionsController } from './settingoptions.controller';

describe('SettingoptionsController', () => {
  let controller: SettingoptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingoptionsController],
    }).compile();

    controller = module.get<SettingoptionsController>(SettingoptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
