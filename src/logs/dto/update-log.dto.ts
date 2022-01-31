import { IsInt, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class UpdateLogDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_user_id'),
  )
  @IsNotEmpty()
  @IsInt()
  log_user_id: number;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_action'),
  )
  @IsNotEmpty()
  @IsString()
  log_action: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_table'),
  )
  @IsNotEmpty()
  @IsString()
  log_table: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_before'),
  )
  @IsNotEmpty()
  @IsString()
  log_before: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_after'),
  )
  @IsNotEmpty()
  @IsString()
  log_after: string;
}
