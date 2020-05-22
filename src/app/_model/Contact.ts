export class Contact {
  company: string;
  email: string;
  mobile: string;
  message: string;

  constructor(company: string, email: string, mobile: string, message: string) {
    this.company = company;
    this.email = email;
    this.mobile = mobile;
    this.message = message;
  }
}
