import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from 'src/app/class/user';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
declare const gtag: any;
@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.scss']
})
export class AddFundsComponent implements OnInit {
  user: User = new User();

  constructor(private userStateService: UserStateService,
    private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })
  }

  public onInitPayeer(amount) {
    this.paymentsService.send(amount).subscribe((data: any) => {

      gtag('event', 'conversion', {
        'send_to': 'AW-977554012/O3NMCIztt_ABENyUkdID',
        'transaction_id': '',
        'event_callback': () => {
          console.log("event_callback");
        }
      });

      console.log("response", data);
      window.open(data.url, '_blank')
    })
  }
}
