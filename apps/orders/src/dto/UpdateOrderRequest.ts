import { IsNotEmpty, IsString,  IsPositive} from "class-validator";

// on 

// la forme de du fichier JSON que l'on doit entrée
export class UpdateOrderRequest{
    @IsString()
    @IsNotEmpty()
    _id: string
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