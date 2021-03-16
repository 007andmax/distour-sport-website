import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SupportItem } from 'src/app/components/support/class/support-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupportService {


  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,) { }



  public setViewdQuestion(key) {
    return this.http.put(`${this.apiUrl}support/viewdquestion`, { key: key });

  }
  public closed(_id) {
    return this.http.put(`${this.apiUrl}support/close`, { _id: _id });

  }
  public addQuestion(key, question) {
    return this.http.post(`${this.apiUrl}support/newquestion`, { key: key, question: question });

  }
  public getList(data) {
    return this.http.get(`${this.apiUrl}support/list?page=${data.page}&cancel=${data.cancel}`).pipe(map((data: any) => data.list.map(item => new SupportItem(item))));
  }
  public getCount() {
    return this.http.get(`${this.apiUrl}support/count`);
  }
  public createTicket(subject, question) {
    return this.http.post(`${this.apiUrl}support/sendquestion`, { subject: subject, question: question });

  }
}
