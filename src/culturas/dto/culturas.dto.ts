import { IsNotEmpty, IsString } from "class-validator";

export class CulturasDTO {
    
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly category: string;
}