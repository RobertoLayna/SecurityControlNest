import { Module } from '@nestjs/common';
import { ResidencesService } from './residences.service';
import { ResidencesController } from './residences.controller';
import { Residence } from './entities/residence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Residence])],
  controllers: [ResidencesController],
  providers: [ResidencesService],
})
export class ResidencesModule {}
