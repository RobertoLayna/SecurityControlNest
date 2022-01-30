import { Module } from '@nestjs/common';
import { ResidentialsService } from './residentials.service';
import { ResidentialsController } from './residentials.controller';
import { Residential } from './entities/residential.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Residential])],
  controllers: [ResidentialsController],
  providers: [ResidentialsService],
})
export class ResidentialsModule {}
