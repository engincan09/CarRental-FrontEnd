import { CarResponseModel } from "./carResponseModel";
import { Customer } from "./customer";

export interface CustomerResponseModel extends CarResponseModel{
    data:Customer[];
}