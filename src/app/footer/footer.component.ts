import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  // TODO Close component when click outside

  constructor() {
  }

  ngOnInit(): void {
  }


  sendMessage() {
    console.log('111111111');
    this.messageEvent.emit('out');
  }


}
