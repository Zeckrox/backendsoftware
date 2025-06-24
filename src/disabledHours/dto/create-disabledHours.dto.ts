import { IsNotEmpty, IsString  } from 'class-validator';

export class CreateDisabledHoursDto {
  @IsString()
  @IsNotEmpty()
  date?: string;

  @IsString()
  @IsNotEmpty()
  hour?: string;
}
