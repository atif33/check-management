import {User} from './user';

export class Checks {
  id: number;
  amount: number;
  amountInLetter: string;
  name: string;
  city: string;
  effectiveEndDate: string;
  opearation: boolean;
  user: User;

  constructor(id?, amount?, amountInLetter?, name?, city?, effectiveEndDate?, operation?, user?) {
    this.id = id;
    this.amount = amount;
    this.amountInLetter = amountInLetter;
    this.name = name;
    this.city = city;
    this.effectiveEndDate = effectiveEndDate;
    this.opearation = operation;
    this.user = user;
  }
}
