import {
  IsNotEmpty,
  IsDateString,
  IsArray,
  IsNumber,
  IsObject,
  IsMongoId,
  IsString,
  IsOptional,
} from 'class-validator';

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

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  // @IsOptional()
  startTime: string;

  @IsNumber()
  @IsNotEmpty()
  // @IsOptional()
  duration: number;
}
