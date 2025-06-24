import { IsNotEmpty, IsNumber, IsString  } from 'class-validator';

export class CreateDisabledDurationDto {
  @IsString()
  @IsNotEmpty()
  date?: string;

  @IsNumber()
  @IsNotEmpty()
  duration?: number;
}
