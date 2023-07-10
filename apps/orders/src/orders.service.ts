import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';
import { DeleteOrderRequest } from './dto/delete-order.request';
import { BILLING_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { UpdateOrderRequest } from './dto/UpdateOrderRequest';

@Injectable()
export class OrdersService {
  // constructeur
  constructor(private readonly ordersRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy
    ){}
  // fonction de création d'ordre
  async createOrder(request: CreateOrderRequest){
    // on crée l'ordre et on le met dans la base de donnée
    // Session
    const session = await this.ordersRepository.startTransaction();
    // Test si il n'y a pas d'erreur
    try {
        const order = await this.ordersRepository.create(request, {session});
        await lastValueFrom(
          this.billingClient.emit('order_created',{
            request,
          })
        );
        await session.commitTransaction();
        return order;
    } catch (error) { // en cas d'erreur on avorte la transaction
      await session.abortTransaction();
      throw error;
    }
  }

  // Fonction qui renvoie tout les transactions
  async getOrders(){
    return this.ordersRepository.find({});
  }

// Une fonction qui permet de faire une mise à jour d'une transaction
async updateOrder(updateOrder: UpdateOrderRequest){
  // Récuperer la commande par son identifiants
  const order = await this.ordersRepository.find({updateOrder});
  
  if (!order) {
    // si on ne trouve pas la transaction on met un message d'erreur
    throw new Error('Order not found');
  }

  // Sinon on met à jour la transaction et on met un message de confirmation
   this.ordersRepository.update(updateOrder);
  return("The Order was modify successfully")
}


  async deleteOrder(orderId: DeleteOrderRequest) {
    // Récuperer la commande par son identifiant
    const order = await this.ordersRepository.find({orderId});
  
    if (!order) {
      // si on ne trouve pas la transaction on met un message d'erreur
      throw new Error('Order not found');
    }
  
    // Sinon on supprime la transaction et on met un message de confirmation
     this.ordersRepository.remove(orderId);
    return("The Order was delete successfully")
  }
}
