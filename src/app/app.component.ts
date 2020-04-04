import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') !== null) {
      console.log('session' + sessionStorage.getItem('token'));
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
