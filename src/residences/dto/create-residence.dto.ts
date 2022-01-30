import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateResidenceDto {
  @IsNotEmpty()
  @IsInt()
  residence_residential_id: number;

  @IsNotEmpty()
  @IsInt()
  residence_number: number;

  @IsNotEmpty()
  @IsString()
  residence_address: string;
}
