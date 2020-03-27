import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckManagement} from "../_model/CheckManagement";
import {SharedService} from "../_service/shared.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  checks = ['Banque Populaire', 'Credit Agricole', 'LCL'];
  form: FormGroup;
  checkManagement: CheckManagement;
  toto;
  message;

  constructor(private  formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['', Validators.required],
      amountInLetter: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      effectiveEndDate: ['', Validators.required]
    });

  }

  convertNumberToletter(): string {
    // @ts-ignore
    const writtenNumber = require('written-number');
    return writtenNumber(this.form.controls.amount.value, {lang: 'fr'}) + ' Dirham';
  }

  transformDate(date): string {
    return this.form.controls.effectiveEndDate.value.year + '-' + this.form.controls.effectiveEndDate.value.month
      + '-' + this.form.controls.effectiveEndDate.value.day;
  }

  onSubmit(): void {
    const date: string = this.transformDate(this.form.controls.effectiveEndDate.value);
    this.checkManagement = new CheckManagement(this.form.controls.amount.value, this.convertNumberToletter(),
      this.form.controls.name.value, this.form.controls.city.value, date);
    console.log('check' + this.checkManagement);

    localStorage.setItem('checkInfoPrint', JSON.stringify(this.checkManagement));
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      window.location.href = '(print:print/invoice)';
    }, 2000);
  }
}
