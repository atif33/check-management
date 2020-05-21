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

  getAllchecks(useriD) {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });

    return this.http.get(environment.api_url + '/api/check/getChecks?userId=' + useriD, {headers: header});
  }

  deleteCheck(id: number) {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.delete(environment.api_url + '/api/check/delete?id=' + id, {headers: header});
  }

  updatCheck(id: number, newStatus: string) {
    const header = new HttpHeaders({
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
      status: newStatus
    });
    return this.http.post(environment.api_url + '/api/check/updatCheck?id=' + id, {},
      {headers: header});
  }
}
