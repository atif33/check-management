import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrintCheckService {

  constructor(private http: HttpClient) {
  }

  printCheck(montant, prenom) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.post('http://localhost:8082/api/temp', {montant, prenom}, {...headers, responseType: 'blob'})
      .subscribe((res: any) => {
      })
      ;
  }
}
