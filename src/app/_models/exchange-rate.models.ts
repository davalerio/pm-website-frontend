import { BaseModel } from "./base.models";

export class ExchangeRateModel extends BaseModel {
  id: string;
  rate_sale: number;
  rate_buy: number;

  constructor(obj: any = null) {
    super(obj)
    // console.log(obj);
    this.id = obj && obj.id || undefined;
    this.rate_sale = obj && obj.rate_sale || 0;
    this.rate_buy = obj && obj.rate_buy || 0;
  }
}