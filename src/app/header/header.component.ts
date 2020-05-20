import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {slideInOut} from '../_animations/animation-slideInOut';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [slideInOut]
})

export class HeaderComponent implements OnInit {
  menuState = 'out';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    if (this.menuState === 'out') {
      this.menuState = 'in';
    } else {
      this.menuState = 'out';
    }
  }

  receiveMessage($event) {
    this.menuState = $event;

  }
}
