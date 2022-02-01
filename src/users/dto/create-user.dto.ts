import { IsOptional } from 'class-validator';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  user_residence_id: number;

  @IsOptional()
  @IsInt()
  user_residential_id: number | null;

  @IsNotEmpty()
  @IsString()
  user_complete_name: string;

  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  user_password: string;

  @IsNotEmpty()
  @IsString()
  user_phone: string;

  @IsNotEmpty()
  @IsString()
  user_rol: string;

  @IsNotEmpty()
  @IsBoolean()
  user_active: boolean;
}
