export class CheckManagement {
  amount: string;
  amountInLetter: string;
  name?: string;
  city?: string;
  effectiveEndDate: string;

  constructor(amount, amountInLetter, name, city, effectiveEndDate) {
    this.amount = amount;
    this.amountInLetter = amountInLetter;
    this.name = name;
    this.city = city;
    this.effectiveEndDate = effectiveEndDate;
  }


}
