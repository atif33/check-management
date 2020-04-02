import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {JwtResponse} from "../_model/JwtResponse";
import {catchError, map, shareReplay} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  private setSession(authSession): void {
    sessionStorage.setItem('email', authSession.email);
    const token = 'Bearer ' + authSession.token;
    sessionStorage.setItem('token', token);
    this.navigatoToPageHome();
  }

  private navigatoToPageHome(): void {
    this.router.navigate(['/home']);
  }

  login(userName: string, password: string) {
    return this.http.post<JwtResponse>(environment.api_url + '/api/auth/signin', {userName, password},
      {responseType: 'json'}).pipe(
      map((res: JwtResponse) => {
        console.log('Inside Pipe');
        this.setSession(res);
      }),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  handleError(error): Observable<string> {
    if (error.status === 403) {
      window.alert('login or passe incorrect');
    }
    return throwError(error.message);
  }
}

