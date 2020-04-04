import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Checks} from '../_model/Checks';
import {CheckService} from '../_service/check.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checks: Array<Checks>;
  sumAmount: number;
  filter = new FormControl('');

  constructor(private checkService: CheckService) {
  }

  ngOnInit(): void {
    this.checkService.getAllchecks().subscribe((val: Checks[]) => {
      this.checks = val;
      this.calculAllAmount();
    }, error => {
      console.log('err' + error);
    });

  }

  sumAmountWithSimpleFor(): number {
    let some = 0;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.checks.length; i++) {
      some += this.checks[i].amount;
    }
    console.log(some);
    return some;
  }

  calculAllAmount(): void {
    let some = 0;
    for (const check of this.checks) {
      some += check.amount;
    }
    this.sumAmount = some;
  }
}
