import { Test, TestingModule } from '@nestjs/testing';
import { ResidentialsController } from './residentials.controller';
import { ResidentialsService } from './residentials.service';

describe('ResidentialsController', () => {
  let controller: ResidentialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResidentialsController],
      providers: [ResidentialsService],
    }).compile();

    controller = module.get<ResidentialsController>(ResidentialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
