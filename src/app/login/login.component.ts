import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('test for jenkins trigger 2');
  }

  connect() {
  }
}
