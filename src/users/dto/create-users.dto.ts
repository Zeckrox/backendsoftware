import { IsEmail, IsNotEmpty, IsOptional, IsString, IsIn, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsString()
  @IsIn(['student', 'admin'])
  role: string;

  @IsString()
  @IsNotEmpty()
  career: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsIn(['Mujer', 'Hombre', 'Otro'])
  @IsNotEmpty()
  gender: string;
}
