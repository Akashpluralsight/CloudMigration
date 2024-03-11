import {Injectable} from "@nestjs/common"

type Todo={
  task:string,
  status:boolean,
  dueDate:Date
}


@Injectable()
export class AppService{
}