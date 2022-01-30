import {
  ValidateIf,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
  IsInt,
  IsBoolean,
} from 'class-validator';

export class UpdateVisitDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_user_id'),
  )
  @IsNotEmpty()
  @IsInt()
  visit_user_id: number;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_start_date'),
  )
  @IsNotEmpty()
  @IsDateString()
  visit_start_date: Date;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_end_date'),
  )
  @IsNotEmpty()
  @IsOptional()
  visit_end_date: Date | null;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_start_time'),
  )
  @IsOptional()
  @IsDateString()
  visit_start_time: Date | null;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_end_time'),
  )
  @IsOptional()
  @IsDateString()
  visit_end_time: Date | null;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_visitor_name'),
  )
  @IsNotEmpty()
  @IsString()
  visit_visitor_name: string;

  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_completed'),
  )
  @IsNotEmpty()
  @IsBoolean()
  visit_completed: boolean;
}
