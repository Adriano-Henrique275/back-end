import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class MonitorDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}