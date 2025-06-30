import { IsNotEmpty, IsDateString, IsNumber, IsMongoId, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsNumber()
  @IsNotEmpty()
  people: number;

  // @IsMongoId()
  // @IsOptional()
  // tableId?: string;

  // @IsMongoId()
  // @IsOptional()
  // cubicleId?: string;

  // @IsNumber()
  // @IsNotEmpty()
  // number: number;

  // @IsString()
  // @IsNotEmpty()
  // floorNumber: string;

  // @IsString()
  // @IsNotEmpty()
  // room: string;
}
