import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Checks} from '../_model/Checks';
import {CheckService} from '../_service/check.service';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  checks: Array<Checks>;
  sumAmount: number;
  filter = new FormControl('');


  constructor(private checkService: CheckService,
              alertConfig: NgbAlertConfig,
              private toasterService: ToastrService) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit(): void {
    this.allChecks();

  }

  sumAmountWithSimpleFor(): number {
    let some = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.checks.length; i++) {
      some += this.checks[i].amount;
    }
    return some;
  }

  calculAllAmount(): void {
    let some = 0;
    for (const check of this.checks) {
      some += check.amount;
    }
    this.sumAmount = some;
  }

  deleteCheck(id: number): void {
    this.checkService.deleteCheck(id).subscribe((val) => {
      this.toasterService.success('Chèque bien supprimerh', 'Cool!');
      this.allChecks();
    });
  }

  allChecks(): void {
    this.checkService.getAllchecks().subscribe((val: Checks[]) => {
      this.checks = val;
      this.calculAllAmount();
      const date = new Date().getFullYear();
      for (const da of val) {
        if (date >= Number(da.effectiveEndDate)) {
          da.opearation = true;
        } else if (date < +da.effectiveEndDate) {
          da.opearation = false;

        }
      }
    }, error => {
      console.log('err' + error);
    });
  }

}
