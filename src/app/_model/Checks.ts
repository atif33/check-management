export class Checks {
  id: number;
  amount: number;
  amountInLetter: string;
  name: string;
  city: string;
  effectiveEndDate: string;

  constructor(id?, amount?, amountInLetter?, name?, city?, effectiveEndDate?) {
    this.id = id;
    this.amount = amount;
    this.amountInLetter = amountInLetter;
    this.name = name;
    this.city = city;
    this.effectiveEndDate = effectiveEndDate;
  }
}
