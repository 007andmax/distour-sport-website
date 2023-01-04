import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PaymentsService {

  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,) { }

  public send(amount) {
    return this.http.post(`${this.apiUrl}payment/add`, { amount: amount });
  }
  public getClientToken() {
    return this.http.get(`${this.apiUrl}braintree/clienttoken`);
  }
  public buy(paymentMethod, amount, boy, productId) {
    return this.http.post(`${this.apiUrl}${paymentMethod}/add`, {
      amount: amount, boy: boy,
      productId: productId, chatId: "test"
    });
  }
  public buyCard(amount, boy, productId) {
    return this.http.post(`${this.apiUrl}braintree/add`, {
      amount: amount, boy: boy,
      productId: productId, chatId: "test"
    });
  }
  public buyPaypal(amount, boy, paymentMethodNonce, deviceData) {
    return this.http.post(`${this.apiUrl}braintree/paypal/add`, {
      amount: amount, boy: boy,
      paymentMethodNonce: paymentMethodNonce, chatId: "test",
      deviceData: deviceData
    });
  }
  public buyGooglePay(amount, boy, paymentMethodNonce, deviceData) {
    return this.http.post(`${this.apiUrl}braintree/googlepay/add`, {
      amount: amount, boy: boy,
      paymentMethodNonce: paymentMethodNonce, chatId: "test",
      deviceData: deviceData
    });
  }
  public getAddress() {
    return this.http.get(`${this.apiUrl}braintree/address`);
  }
}
