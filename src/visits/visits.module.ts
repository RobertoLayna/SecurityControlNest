import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { Visit } from './entities/visit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Visit])],
  controllers: [VisitsController],
  providers: [VisitsService],
})
export class VisitsModule {}
