import {Component, OnInit} from '@angular/core';
import {CheckManagement} from '../_model/CheckManagement';

@Component({
  selector: 'app-pdf-print',
  templateUrl: './pdf-print.component.html',
  styleUrls: ['./pdf-print.component.css']
})
export class PdfPrintComponent implements OnInit {
  message: CheckManagement;

  constructor() {
  }

  ngOnInit(): void {
    this.message = JSON.parse(localStorage.getItem('checkInfoPrint'));
    window.print();
    // TODO Refacto to Ts
    window.onafterprint = function (e) {
      window.location.href = 'home';
    };
  }
}
