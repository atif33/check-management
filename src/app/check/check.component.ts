import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Checks} from '../_model/Checks';
import {NgxSpinnerService} from 'ngx-spinner';
import {CheckService} from '../_service/check.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {User} from '../_model/user';
import {ToastrService} from 'ngx-toastr';

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
              private checkService: CheckService,
              private location: Location,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: [null, Validators.required],
      amountInLetter: [null, Validators.required],
      name: [null, Validators.required],
      city: [null, Validators.required],
      effectiveEndDate: [null, Validators.required]
    });

  }

  convertNumberToletter(): string {
    // @ts-ignore
    const writtenNumber = require('written-number');
    return writtenNumber(this.form.controls.amount.value, {lang: 'fr'}) + ' Dirhame';
  }

  transformDate(date): string {
    return this.form.controls.effectiveEndDate.value.year + '-' + this.form.controls.effectiveEndDate.value.month
      + '-' + this.form.controls.effectiveEndDate.value.day;
  }

  onSubmit(): void {
    const date: string = this.transformDate(this.form.controls.effectiveEndDate.value);
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.checkManagement = new Checks(null, this.form.controls.amount.value, this.convertNumberToletter(),
      this.form.controls.name.value, this.form.controls.city.value, date, 0, user);
    localStorage.setItem('checkInfoPrint', JSON.stringify(this.checkManagement));
    this.checkService.createNewCheck(this.checkManagement).subscribe((val: Checks) => {
      this.spinner.show();
      setTimeout(() => {
        window.location.href = '(print:print/invoice)';
      }, 2000);
    });
  }

  resetForm(): void {
    this.form.reset();
    this.location.back();
  }
}
