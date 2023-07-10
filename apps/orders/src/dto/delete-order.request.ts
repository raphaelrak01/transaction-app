import { IsNotEmpty, IsString } from "class-validator";

// la forme de du fichier JSON que l'on doit entrée
export class DeleteOrderRequest{
    @IsString() // doit être une chaîne de caractère 
    @IsNotEmpty() // et doit être non vide
    _id: string;
}