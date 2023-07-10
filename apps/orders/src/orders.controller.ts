import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';
import { DeleteOrderRequest } from './dto/delete-order.request';
import { UpdateOrderRequest } from './dto/UpdateOrderRequest';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Méthode Post ( Remise des Informations)
  @Post()
  // Création d'un ordre
  async creatOrder(
    // On va prendre dans le body
    @Body() request: CreateOrderRequest
  ){
    return this.ordersService.createOrder(request);
  }

  // Méthode Get ( Récolte des informations )
  @Get()
  async getOrders(){
    return this.ordersService.getOrders();
  }

  // Méthode de mise à jour
  @Put()
  async updateOrder(@Body() updateOrder: UpdateOrderRequest){
    return await this.ordersService.updateOrder(updateOrder)
  }

  // Methode de suppression
  @Delete()
  async deleteOrders( @Body() id: DeleteOrderRequest){
    return await this.ordersService.deleteOrder(id);
  }
}
