export class Checks {
  id: number;
  amount: number;
  amountInLetter: string;
  name: string;
  city: string;
  effectiveEndDate: string;
  opearation: boolean;

  constructor(id?, amount?, amountInLetter?, name?, city?, effectiveEndDate?, operation?) {
    this.id = id;
    this.amount = amount;
    this.amountInLetter = amountInLetter;
    this.name = name;
    this.city = city;
    this.effectiveEndDate = effectiveEndDate;
    this.opearation = operation;
  }
}
