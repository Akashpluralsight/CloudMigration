import { Controller, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { PlansModule } from './plans/plans.module';
import {PlanUserModule} from './planUsers/planUsers.module'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }), PlansModule,PlanUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


