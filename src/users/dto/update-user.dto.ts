import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateIf,
} from 'class-validator';

export class UpdateUserDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_residence_id'),
  )
  @IsNotEmpty()
  @IsInt()
  user_residence_id: number;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_residential_id'),
  )
  @IsOptional()
  @IsInt()
  user_residential_id: number | null;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_complete_name'),
  )
  @IsNotEmpty()
  @IsString()
  user_complete_name: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_name'),
  )
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_password'),
  )
  @IsNotEmpty()
  @IsString()
  user_password: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_phone'),
  )
  @IsNotEmpty()
  @IsString()
  user_phone: string;

  @ValidateIf((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_rol'))
  @IsNotEmpty()
  @IsString()
  user_rol: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_active'),
  )
  @IsNotEmpty()
  @IsBoolean()
  user_active: boolean;
}
