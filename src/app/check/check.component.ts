import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Checks} from '../_model/Checks';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {CheckService} from '../_service/check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  checks = ['Banque Populaire', 'Credit Agricole', 'LCL'];
  form: FormGroup;
  checkManagement: Checks;
  message;

  constructor(private  formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private checkService: CheckService) {
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
    this.checkManagement = new Checks(this.form.controls.amount.value, this.convertNumberToletter(),
      this.form.controls.name.value, this.form.controls.city.value, date);
    localStorage.setItem('checkInfoPrint', JSON.stringify(this.checkManagement));
    this.checkService.createNewCheck(this.checkManagement).subscribe((val: Checks) => {
      this.spinner.show();
      setTimeout(() => {
        window.location.href = '(print:print/invoice)';
      }, 2000);
    });
  }
}
