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

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticateService: AuthenticateService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  connect() {
    this.authenticateService.login(this.form.controls.userName.value, this.form.controls.password.value).
     subscribe((e) => console.log('Good'));
  }
}
