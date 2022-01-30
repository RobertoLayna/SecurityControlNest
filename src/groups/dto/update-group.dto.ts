import { ValidateIf, IsNotEmpty, IsString } from 'class-validator';

export class UpdateGroupDto {
  @ValidateIf(
    (o) => Object.keys(o).length == 0 || o.hasOwnProperty('group_name'),
  )
  @IsNotEmpty()
  @IsString()
  group_name: string;
}
