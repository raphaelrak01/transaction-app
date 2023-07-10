import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Order } from "./schemas/order.schema"
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from 'mongoose'
import { DeleteOrderRequest } from "./dto/delete-order.request";
import { UpdateOrderRequest } from "./dto/UpdateOrderRequest"

@Injectable()
export class OrdersRepository extends AbstractRepository<Order>{
    protected readonly logger: Logger = new Logger(OrdersRepository.name)

    constructor(
        @InjectModel(Order.name) orderModel: Model<Order>, 
        @InjectConnection() connection: Connection
    ){
        super(orderModel, connection);
    }

    // Pour faire une mise à jour de la somme à transferer
    async update(updateOrder: UpdateOrderRequest): Promise<void> {
        // On fait la mise à jour de l'ordre dont l'idenetifiant est passé en paramètre
        // updateOrdre est la modification apportée à l'ordre
        await this.model.updateOne({ _id: updateOrder._id }, updateOrder).exec();
      }
      

    // Pour supprimer un ordre dans la base de donnée 
    // en utilisant son identifiant
    async remove(id: DeleteOrderRequest): Promise<void> {
        await this.model.deleteOne({_id: id }).exec();
      }
      
}