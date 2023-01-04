import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListType } from 'src/app/class/list-type';
import { CLIENT_AUTHORIZATION, liest_category_boy, list_boys, PAYMENT_TYPE_BRAINTREE, PAYMENT_TYPE_GOOGLE_PAY, PAYMENT_TYPE_PAYPAL } from 'src/app/const/const';
import { PaymentsService } from 'src/app/services/payments/payments.service';
declare var braintree;
declare var google;
declare var paypal;
@Component({
  selector: 'app-boy',
  templateUrl: './boy.component.html',
  styleUrls: ['./boy.component.scss']
})
export class BoyComponent implements OnInit {
  index: number = 0;
  id: string;
  list = liest_category_boy;
  clientToken;
  dropinInstance;
  paymentsClient;
  googlePaymentInstance;
  paypalNonce;
  disabledSubmit: boolean = true;
  deviceData;
  address;
  listPayments = [new ListType("Card", PAYMENT_TYPE_BRAINTREE),
  new ListType("PayPal", PAYMENT_TYPE_PAYPAL),
  new ListType("Google Pay", PAYMENT_TYPE_GOOGLE_PAY)];
  selectedPayment = new ListType("Card", PAYMENT_TYPE_BRAINTREE);
  constructor(public activateRoute: ActivatedRoute,
    public paymentsService: PaymentsService) { }

  ngOnInit() {

    this.selectPaymentMethod(0);
    this.index = Number(this.activateRoute.snapshot.params['index']) || 0;
    this.id = this.activateRoute.snapshot.params['id'] || "";
    let subscription = this.activateRoute.params.subscribe(params => {
      this.index = Number(params['id']);
      this.id = params['id'];
    });
    this.paymentsService.getAddress().subscribe(data => {
      this.address = data;
    })
  }
  selectPaymentMethod(i) {
    this.selectedPayment = this.listPayments[i];
    this.disabledSubmit = true;
    if (this.listPayments[i].value === PAYMENT_TYPE_BRAINTREE) {
      this.paymentsService.getClientToken().subscribe((data: any) => {
        this.clientToken = data.clientToken;
        braintree.dropin.create({
          container: document.getElementById('dropin-container'),
          authorization: this.clientToken,
          // ...plus remaining configuration
        }).then((dropinInstance) => {
          console.log("dropinInstance", dropinInstance);
          // Use `dropinInstance` here
          this.dropinInstance = dropinInstance;
          this.disabledSubmit = false;
          // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
        }).catch((error) => { });
      })
    }
    if (this.listPayments[i].value === PAYMENT_TYPE_PAYPAL) {
      braintree.client.create({
        authorization: "sandbox_bm9hdgq5_mzxr5s52k4m5zkkw"
      }).then((clientInstance) => {
        // Create a PayPal Checkout component.
        this.getDeviceData(clientInstance);
        return braintree.paypalCheckout.create({
          client: clientInstance
        });
      }).then((paypalCheckoutInstance) => {
        return paypalCheckoutInstance.loadPayPalSDK({
          currency: 'USD',
          intent: 'capture'
        });
      }).then((paypalCheckoutInstance) => {
        return paypal.Buttons({
          fundingSource: paypal.FUNDING.PAYPAL,

          createOrder: () => {
            return paypalCheckoutInstance.createPayment({
              flow: 'checkout', // Required
              amount: 10.00, // Required
              currency: 'USD', // Required, must match the currency passed in with loadPayPalSDK
              intent: 'capture', // Must match the intent passed in with loadPayPalSDK,
              enableShippingAddress: true,
              shippingAddressEditable: false,
              shippingAddressOverride: {
                recipientName: `${this.address.firstName} ${this.address.firstName}`,
                line1: this.address.extendedAddress,
                line2: '',
                city: this.address.locality,
                countryCode: this.address.countryCode,
                postalCode: this.address.postcode,
              }
            });
          },

          onApprove: (data, actions) => {
            return paypalCheckoutInstance.tokenizePayment(data).then((payload) => {
              // Submit `payload.nonce` to your server
              this.paypalNonce = payload.nonce;
              this.buy(10);
              console.log("payload", payload);
            });
          },

          onCancel: (data) => {
            console.log('PayPal payment cancelled', JSON.stringify(data));
          },

          onError: (err) => {
            console.error('PayPal error', err);
          }
        }).render('#paypal-button');
      }).then(function () {
        // The PayPal button will be rendered in an html element with the ID
        // `paypal-button`. This function will be called when the PayPal button
        // is set up and ready to be used
      });
    }
    if (this.listPayments[i].value === PAYMENT_TYPE_GOOGLE_PAY) {
      this.paymentsClient = new google.payments.api.PaymentsClient({
        environment: 'TEST' // Or 'PRODUCTION'
      });
      braintree.client.create({ authorization: CLIENT_AUTHORIZATION }).then((client) => {
        braintree.googlePayment.create({
          client: client, // From braintree.client.create, see below for full example
          googlePayVersion: 2,
          googleMerchantId: '0995-7399-4369' // Optional in sandbox; if set in sandbox, this value must be a valid production Google Merchant ID
        }).then((googlePaymentInstance) => {

          this.paymentsClient.isReadyToPay({
            // see https://developers.google.com/pay/api/web/reference/object#IsReadyToPayRequest
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: googlePaymentInstance.createPaymentDataRequest().allowedPaymentMethods,
            existingPaymentMethodRequired: true // Optional
          }).then((response) => {
            console.log("response", response);
            if (response.result) {
              this.googlePaymentInstance = googlePaymentInstance;
              this.disabledSubmit = false;
            }
          });
        })
      })
    }
  }
  getDeviceData(clientInstance) {
    braintree.dataCollector.create({
      client: clientInstance
    }).then((dataCollectorInstance) => {
      // At this point, you should access the dataCollectorInstance.deviceData value and provide it
      // to your server, e.g. by injecting it into your form as a hidden input.
      this.deviceData = dataCollectorInstance.deviceData;
      console.log("deviceData", this.deviceData);
    });
  }
  getAddress() {

  }
  buy(price) {
    /* if (this.selectedPayment.value === PAYMENT_TYPE_PAYPAL) {
       this.paymentsService.buy("paypal", price, list_boys[this.index].name.toLocaleUpperCase(), "test").subscribe((data: any) => {
         console.log(data);
         window.open(data.url, '_blank').focus();
         //  var win = window.open();
         //  win.document.write(data.html)
       })
     }*/
    if (this.selectedPayment.value === PAYMENT_TYPE_PAYPAL) {
      this.paymentsService.buyPaypal(price, list_boys[this.index].name.toLocaleUpperCase(), this.paypalNonce, this.deviceData).subscribe((data: any) => {
        console.log(data);
        // window.open(data.url, '_blank').focus();
        //  var win = window.open();
        //  win.document.write(data.html)
      })
    }
    if (this.selectedPayment.value === PAYMENT_TYPE_BRAINTREE) {
      this.dropinInstance.requestPaymentMethod((err, payload) => {
        if (err) {
          console.log('Error', err);

          return;
        }
        console.log("payload", payload);
        this.paymentsService.buyCard(price, list_boys[this.index].name.toLocaleUpperCase(), payload.nonce).subscribe((data: any) => {
          console.log(data);
          //  window.open(data.url, '_blank').focus();
          //  var win = window.open();
          //  win.document.write(data.html)
        })
        // Add the nonce to the form and submit

      });
    }
    if (this.selectedPayment.value === PAYMENT_TYPE_GOOGLE_PAY) {
      var paymentDataRequest = this.googlePaymentInstance.createPaymentDataRequest({
        transactionInfo: {
          currencyCode: 'USD',
          totalPriceStatus: 'FINAL',
          totalPrice: '100.00' // Your amount
        }
      });

      // We recommend collecting billing address information, at minimum
      // billing postal code, and passing that billing postal code with all
      // Google Pay card transactions as a best practice.
      // See all available options at https://developers.google.com/pay/api/web/reference/object
      var cardPaymentMethod = paymentDataRequest.allowedPaymentMethods[0];
      cardPaymentMethod.parameters.billingAddressRequired = true;
      cardPaymentMethod.parameters.billingAddressParameters = {
        format: 'FULL',
        phoneNumberRequired: true
      };

      this.paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData) => {
        return this.googlePaymentInstance.parseResponse(paymentData);
      }).then((result) => {
        console.log("result", result);
        this.paymentsService.buyGooglePay(price, list_boys[this.index].name.toLocaleUpperCase(), result.nonce, result.type).subscribe((data: any) => {
          console.log(data);
          //  window.open(data.url, '_blank').focus();
          //  var win = window.open();
          //  win.document.write(data.html)
        })
        // Send result.nonce to your server
        // result.type may be either "AndroidPayCard" or "PayPalAccount", and
        // paymentData will contain the billingAddress for card payments
      }).catch((err) => {
        console.log("err", err);
        // Handle errors
      });

    }
  }
  public trackByIndex(index, item) {
    return index;
  }
}
