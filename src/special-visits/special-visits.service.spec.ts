import { Test, TestingModule } from '@nestjs/testing';
import { SpecialVisitsService } from './special-visits.service';

describe('SpecialVisitsService', () => {
  let service: SpecialVisitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialVisitsService],
    }).compile();

    service = module.get<SpecialVisitsService>(SpecialVisitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
