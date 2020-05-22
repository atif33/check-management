import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  sendMessage() {
    this.messageEvent.emit('out');
  }


}
