import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateResidentialDto {
  @IsNotEmpty()
  @IsInt()
  residential_group_id: number;

  @IsNotEmpty()
  @IsString()
  residential_name: string;
}
