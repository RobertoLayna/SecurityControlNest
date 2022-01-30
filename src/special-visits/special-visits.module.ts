import { Module } from '@nestjs/common';
import { SpecialVisitsService } from './special-visits.service';
import { SpecialVisitsController } from './special-visits.controller';
import { SpecialVisit } from './entities/special-visit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialVisit])],
  controllers: [SpecialVisitsController],
  providers: [SpecialVisitsService],
})
export class SpecialVisitsModule {}
