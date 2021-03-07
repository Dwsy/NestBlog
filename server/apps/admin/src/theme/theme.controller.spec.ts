import { Test, TestingModule } from '@nestjs/testing';
import { ThemeController } from './theme.controller';

describe('NavigationController', () => {
  let controller: ThemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemeController],
    }).compile();

    controller = module.get<ThemeController>(ThemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
