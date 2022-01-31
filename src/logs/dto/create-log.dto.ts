import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLogDto {
  @IsNotEmpty()
  @IsInt()
  log_user_id: number;

  @IsNotEmpty()
  @IsString()
  log_action: string;

  @IsNotEmpty()
  @IsString()
  log_table: string;

  @IsNotEmpty()
  @IsString()
  log_before: string;

  @IsNotEmpty()
  @IsString()
  log_after: string;
}
