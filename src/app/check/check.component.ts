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
      montant: ['', Validators.required]
    });
  }

  toto() {
    // @ts-ignore
    const writtenNumber = require('written-number');
    writtenNumber(this.form.controls.montant.value, {lang: 'fr'});
    console.log(writtenNumber(this.form.controls.montant.value, {lang: 'fr'}));
}
}
