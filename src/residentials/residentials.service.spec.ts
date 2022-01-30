import { Test, TestingModule } from '@nestjs/testing';
import { ResidentialsService } from './residentials.service';

describe('ResidentialsService', () => {
  let service: ResidentialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResidentialsService],
    }).compile();

    service = module.get<ResidentialsService>(ResidentialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
