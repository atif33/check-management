import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticateService} from "../_service/authenticate.service";
import {log} from "util";
import {JwtResponse} from "../_model/JwtResponse";

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submit = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticateService: AuthenticateService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  connect() {
    this.submit = true;
    if (this.form.valid) {

      this.authenticateService.login(this.form.controls.userName.value, this.form.controls.password.value).subscribe();
    }
  }

  // convenience getter for easy access to form fields
  get fieldForm() {
    return this.form.controls;
  }
}
