import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getTokenData() {
    return JSON.parse(atob(localStorage.getItem('tokenData')));
  }

  userLogin(userLogin: any): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${environment.apiBaseEndpoint}/user/login`;
    return this.http.post<any>(url, userLogin, httpOptions);
  }

}
