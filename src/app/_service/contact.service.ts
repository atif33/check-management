import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../_model/Contact';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  newContact(contact: Contact) {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(environment.api_url + '/api/contact/saveContact', contact, {headers: header});
  }
}
