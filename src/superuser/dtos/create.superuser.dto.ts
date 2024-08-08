import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateSuperUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}