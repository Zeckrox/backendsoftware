import { IsString, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class GetAvailableSpotsDto {
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  // @IsArray()
  // @IsNotEmpty()
  // timeblocks: number[]; //number porque sera los ids de los timeblocks en utils aqui en back
}
