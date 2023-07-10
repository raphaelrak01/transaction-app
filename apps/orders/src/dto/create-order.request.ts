import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateOrderRequest{
    // doit être une chaîne de caractère, et
    // ne doit pas être vide
    @IsString()
    @IsNotEmpty()
    name: string;  
    
    // Pareil que name
    @IsString()
    @IsNotEmpty()
    mail:string; 

    // doit être un numéro de téléphone
    @IsString()
    phoneNumber: string;

    // le montant ne doit pas être vide 
    // et doit être positive
    @IsNotEmpty()
    @IsPositive()
    transferAmount: number;

}

