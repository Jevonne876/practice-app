import { Todo } from "./todo";

export class Response {

  timeStamp: Date;
  statusCode: number;
  httpsStatus: string;
  reason: string;
  message: string;
  developerMessage: string
  todo?: Todo


}
