import { IsNumber, IsPositive, IsString } from "class-validator";

export class catDto {

    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    name: string;
}
