import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable( )
export class PaymentsService {

  private apiUrl = environment.apiUrl;
  constructor( 
    private http: HttpClient,) { }

    public send(amount) {
      return this.http.post(`${this.apiUrl}payment/add`, { amount: amount });
    }
}
