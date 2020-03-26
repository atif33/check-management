import {Component, OnInit} from '@angular/core';
import {SharedService} from "../_service/shared.service";

@Component({
  selector: 'app-pdf-print',
  templateUrl: './pdf-print.component.html',
  styleUrls: ['./pdf-print.component.css']
})
export class PdfPrintComponent implements OnInit {
  message;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    const messageObject = JSON.parse(localStorage.getItem('checkInfoPrint'));
    this.message = messageObject.montant;
    window.print();

  }


}
