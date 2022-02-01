import { IsInt, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateResidenceDto {
  @IsNotEmpty()
  @IsInt()
  residence_residential_id: number;

  @IsNotEmpty()
  @IsString()
  residence_number: string;

  @IsNotEmpty()
  @IsString()
  residence_address: string;

  @IsNotEmpty()
  @IsBoolean()
  residence_active: boolean;
}
