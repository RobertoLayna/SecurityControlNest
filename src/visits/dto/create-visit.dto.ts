import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVisitDto {
  @IsNotEmpty()
  @IsInt()
  visit_user_id: number;

  @IsNotEmpty()
  @IsDateString()
  visit_start_date: Date;

  @IsOptional()
  @IsDateString()
  visit_end_date: Date | null;

  @IsOptional()
  @IsDateString()
  visit_start_time: Date | null;

  @IsOptional()
  @IsDateString()
  visit_end_time: Date | null;

  @IsNotEmpty()
  @IsString()
  visit_visitor_name: string;

  @IsNotEmpty()
  @IsBoolean()
  visit_completed: boolean;
}
