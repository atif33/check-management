import {Component, OnInit} from '@angular/core';
import {Checks} from '../_model/Checks';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-pdf-print',
  templateUrl: './pdf-print.component.html',
  styleUrls: ['./pdf-print.component.css']
})
export class PdfPrintComponent implements OnInit {
  message: Checks;

  constructor() {

  }

  ngOnInit(): void {
    this.message = JSON.parse(localStorage.getItem('checkInfoPrint'));
    window.print();
    // TODO Refacto to Ts
    window.onafterprint = function (e) {
      console.log('totoot');
      window.location.href = 'home';
    };
    localStorage.removeItem('checkInfoPrint');
  }
}
