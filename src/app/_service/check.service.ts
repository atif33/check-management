import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Checks} from '../_model/Checks';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) {
  }

  createNewCheck(checks: Checks) {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(environment.api_url + '/api/check/saveCheck', checks, {headers: header});
  }

  getAllchecks() {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });

    return this.http.get(environment.api_url + '/api/check/getChecks', {headers: header});
  }
}
