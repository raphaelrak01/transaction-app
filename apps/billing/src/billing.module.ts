import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

@Module({
  // Importation de Rabbit MQ
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      RABBIT_MQ_URI: Joi.string().required(), // le nom sera obligatoire
      RABBIT_MQ_BILLING_QUEUE: Joi.string().required(), // la fille d'attente sera obligatoire
    })
  }),RmqModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
