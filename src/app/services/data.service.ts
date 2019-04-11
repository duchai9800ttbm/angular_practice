import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHistoryChange() {
    return this.get('http://115.79.35.119:6868/mhb-crm//employee/158/audits/0/5');
  }

  getProspectList(page: number, itemPerPage: number) {
    return this.get(`http://115.79.35.119:6868/mhb-crm//employee/158/prospects/filter/${page}/${itemPerPage}/`);
  }

  private get(url: string): Observable<any> {

    if (localStorage.getItem('token')) {

      return this.http.get<any>(url);
    }

    return null;
  }
}
