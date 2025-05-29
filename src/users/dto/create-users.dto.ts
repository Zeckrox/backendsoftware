import { IsEmail, IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

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
}
