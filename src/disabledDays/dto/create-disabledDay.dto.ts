import { IsNotEmpty, IsString  } from 'class-validator';

export class CreateDisabledDayDto {
  @IsString()
  @IsNotEmpty()
  date?: string;
}
