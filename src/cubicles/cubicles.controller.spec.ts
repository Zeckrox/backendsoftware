import { Test, TestingModule } from '@nestjs/testing';
import { CubiclesController } from './cubicles.controller';
import { CubiclesService } from './cubicles.service';

describe('CubiclesController', () => {
  let controller: CubiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CubiclesController],
      providers: [CubiclesService],
    }).compile();

    controller = module.get<CubiclesController>(CubiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
