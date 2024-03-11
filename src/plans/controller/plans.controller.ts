import { Body, Controller, Get,Param,Post } from '@nestjs/common';
import {PlanCreationDto} from "../dtos/plan.dtos"

@Controller('v5/plans')
export class PlansController {

    @Get()
    getPlans(){
        return {data:[]}
    }

    @Post()
    createPlan(@Body() planDetails: PlanCreationDto){
        return {data:[]}
    }

    @Get(':planId')
    getPlanDetails(@Param(':planId') planId: string){

        return {data:[]}
    }

}
