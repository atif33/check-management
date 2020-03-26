import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CheckManagement} from "../_model/CheckManagement";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  changeMessage(message) {
    this.messageSource.next(message);
  }
}
