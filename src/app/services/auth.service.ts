import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient)  { }

  login(username, password): Observable<any> {
    // const header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post('http://115.79.35.119:6868/mhb-crm/login', {
      username,
      password
    });
  }
}
