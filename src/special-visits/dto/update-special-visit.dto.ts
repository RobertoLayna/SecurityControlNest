import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class UpdateSpecialVisitDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('special_visit_name'),
  )
  @IsNotEmpty()
  @IsString()
  special_visit_name: string;

  @ValidateIf(
    (o) =>
      Object.keys(o).length == 0 || o.hasOwnProperty('special_visit_vehicle'),
  )
  @IsNotEmpty()
  @IsString()
  special_visit_vehicle: string;
}
