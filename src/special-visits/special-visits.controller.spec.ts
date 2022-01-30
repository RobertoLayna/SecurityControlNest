import { Test, TestingModule } from '@nestjs/testing';
import { SpecialVisitsController } from './special-visits.controller';
import { SpecialVisitsService } from './special-visits.service';

describe('SpecialVisitsController', () => {
  let controller: SpecialVisitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialVisitsController],
      providers: [SpecialVisitsService],
    }).compile();

    controller = module.get<SpecialVisitsController>(SpecialVisitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
