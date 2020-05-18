import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeAnimation} from './_animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

}
