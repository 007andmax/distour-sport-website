import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/app/auth.service';
import { UserStateService } from 'src/app/state/user/user-state.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
   
  user: User = new User();
  imask = {
    mask: Number,
    radix: ".",
    min: 5
  };
  visaCard: string = "";
  masterCard: string = "";
  alertMessage: string = "";
  showAlertVisa: boolean = false;
  showAlertMasterCard: boolean = false;
  constructor(private authService: AuthService,
    private userStateService:UserStateService) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })

  }
  public selectCountry(country) {

  }
 public onInitWithdrawal(type) {

 }
 public onAcceptAmount(value) {
  console.log("value", value);
}

}
