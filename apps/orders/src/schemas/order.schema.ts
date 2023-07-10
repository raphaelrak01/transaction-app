import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey : false}) // pour ne pas gérer la gestion des versions
export class Order extends AbstractDocument{
    @Prop()
    name: string; // le nom de la personne

    @Prop()
    mail:string; // le mail de la personne

    @Prop()
    phoneNumber: string; // numéro de téléphone ( numéro de compte)

    @Prop()
    transferAmount: number; // le montant du transfert


}

export const OrderSchema = SchemaFactory.createForClass(Order);