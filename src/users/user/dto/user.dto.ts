import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDTO {

  
  readonly id?: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly ra: number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}