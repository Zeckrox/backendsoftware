import { IsInt, IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateCubicleDto {
  @IsInt()
  @IsNotEmpty()
  number: number;

  @IsInt()
  @IsNotEmpty()
  floorNumber: number;

  @IsString()
  @IsOptional()
  room?: string;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean = true;
}
