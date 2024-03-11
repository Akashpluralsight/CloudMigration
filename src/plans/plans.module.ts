import { Module } from '@nestjs/common';
import { PlansController } from './controller/plans.controller';


@Module({
  controllers: [PlansController]
})
export class PlansModule {}
