import { ValidateIf, IsNotEmpty, IsString } from 'class-validator';

export class UpdateResidentialDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('residential_name'),
  )
  @IsNotEmpty()
  @IsString()
  residential_name: string;
}
