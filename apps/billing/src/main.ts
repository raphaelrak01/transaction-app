import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  // Une constante 
  const rmqService = app.get<RmqService>(RmqService)
  app.connectMicroservice(rmqService.getOptions('BILLING'));// creation de l'application de facturation
  await app.startAllMicroservices();
}
bootstrap();
