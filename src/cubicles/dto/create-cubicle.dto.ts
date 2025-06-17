import { IsInt, IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateCubicleDto {
  @IsInt()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  floorNumber: string;

  @IsString()
  @IsOptional()
  room?: string;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean = true;
}
