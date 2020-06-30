import {Component, OnInit} from '@angular/core';
import {CheckService} from '../_service/check.service';
import {User} from '../_model/user';
import {map, reduce, tap} from 'rxjs/operators';
import {Checks} from '../_model/Checks';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
  noPaid: number;
  paid: number;

  constructor(private checkService: CheckService) {
  }

  public pieChartLabels = ['Payé', 'Non payé'];
  pieChartData: Array<number> = [null, null];

  ngOnInit(): void {
    const userId: User = JSON.parse(sessionStorage.getItem('user')).id;
    this.checkService.getAllchecks(userId).pipe(
      map((res: Checks[]) => res.filter((check) => check.status === 'Non payé')
        .reduce((accumulateur, valeurCourant) => {
          return accumulateur + valeurCourant.amount;
        }, 0)),
    ).subscribe((checkNoPaid: number) => {
      this.noPaid = checkNoPaid;

    });
    this.checkService.getAmountCheckPaid().subscribe((checkPaid: number) => {
      this.paid = checkPaid;
      this.amountCHeckPaidAndNotPaid();
    });
  }

  amountCHeckPaidAndNotPaid(): Array<number> {
    return this.pieChartData = [this.paid, this.noPaid];
  }


}
