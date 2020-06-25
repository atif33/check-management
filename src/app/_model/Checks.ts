import {User} from './user';

export class Checks {
  id: number;
  amount: number;
  amountInLetter: string;
  checkNumber: number;
  bank: string;
  name: string;
  city: string;
  effectiveEndDate: string;
  status: string;
  user: User;


  constructor(id?, amount?, amountInLetter?, checkNumber?, bank?, name?, city?, effectiveEndDate?, status?, user?) {
    this.id = id;
    this.amount = amount;
    this.amountInLetter = amountInLetter;
    this.checkNumber = checkNumber;
    this.bank = bank;
    this.name = name;
    this.city = city;
    this.effectiveEndDate = effectiveEndDate;
    this.status = status;
    this.user = user;
  }
}
