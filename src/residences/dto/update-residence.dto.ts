import { ValidateIf, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class UpdateResidenceDto {
  @ValidateIf(
    (o) =>
      Object.keys(o).length == 0 ||
      o.hasOwnProperty('residence_residential_id'),
  )
  @IsNotEmpty()
  @IsInt()
  residence_residential_id: number;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('residence_number'),
  )
  @IsNotEmpty()
  @IsInt()
  residence_number: number;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('residence_address'),
  )
  @IsNotEmpty()
  @IsString()
  residence_address: string;
}
