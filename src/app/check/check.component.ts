import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  checks = ['Banque Populaire', 'Credit Agricole', 'LCL'];
  form: FormGroup;

  constructor(private  formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      montant: ['', Validators.required],
      effectiveEndDate: ['', Validators.required]
    });
  }

  convertNumberToletter(): string {
    // @ts-ignore
    const writtenNumber = require('written-number');
    return writtenNumber(this.form.controls.montant.value, {lang: 'fr'}) + ' Dirham';
  }

  onSubmit() {
    const dateForm = this.form.controls.effectiveEndDate.value;
    console.log(dateForm.year + '-' + dateForm.month + '-' + dateForm.day );
  }
}
