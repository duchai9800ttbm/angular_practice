import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private get objectId() {
    return localStorage.getItem('objectId');
  }

  constructor(private http: HttpClient) { }

  getHistoryChange() {
    return this.get(`http://115.79.35.119:6868/mhb-crm//employee/${this.objectId}/audits/0/5`);
  }

  getProspectList(page: number, itemPerPage: number) {
    return this.get(`http://115.79.35.119:6868/mhb-crm//employee/${this.objectId}/prospects/filter/${page}/${itemPerPage}/`);
  }

  getProspectItem(id: any) {
    return this.get(`http://115.79.35.119:6868/mhb-crm//employee/${this.objectId}/prospect/${id}`);
  }

  getDataForCheckbox(url: string) {
    return this.get(url);
  }

  private get(url: string): Observable<any> {

    if (localStorage.getItem('token')) {
      return this.http.get<any>(url);
    }

    return null;
  }
}
