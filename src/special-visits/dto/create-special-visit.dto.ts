import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpecialVisitDto {
  @IsNotEmpty()
  @IsString()
  special_visit_name: string;

  @IsNotEmpty()
  @IsString()
  special_visit_vehicle: string;
}
