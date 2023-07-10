import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { DatabaseModule, RmqModule } from '@app/common';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrdersRepository } from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { BILLING_SERVICE } from './constants/services';

@Module({
  // ConfigModule : pour accéder à notre base de donnée MongoDB
  imports: [
    ConfigModule.forRoot({
      // sera globale dans tout le micro-service orders
      isGlobal: true,
      // OPn aura besoin que les variables defini ci-dessous 
      // soient déclarer sinon l'application mettra des erreurs
      // dès le lancement 
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(), // déclaration obligatoire
        PORT: Joi.number().required(),// le PORT aussi est obligatoire
      }),
      // emplacement du fichier env qui contient les variables
      envFilePath: './apps/orders/.env',
    }),
    // Importation de la base de donnée
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema}]),
    // Importation des modules de Rabbit MQ
    RmqModule.register({
      name: BILLING_SERVICE,
    })
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
