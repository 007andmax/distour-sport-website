import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { User } from './class/user';
import { UserNotification } from './interfaces/socket-user-notification';
import { AuthService } from './services/app/auth.service';
import { SupportSocketService } from './services/socket/support-socket.service';
import { UserSocketService } from './services/socket/user-socket.service';
import { SupportStateService } from './state/support/support-state.service';
import { UserStateService } from './state/user/user-state.service';
declare const gtag: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  _opened: boolean = false;
  user: User = new User();
  countSupport: number = 0;
  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private userSocketService: UserSocketService,
    private supportSocketService: SupportSocketService,
    private supportStateService: SupportStateService,
    private userStateService: UserStateService) { }



  ngOnInit(): void {

    firebase.initializeApp(environment.firebaseConfig);
    const analytics = firebase.analytics();
    gtag('js', new Date());

    gtag('config', 'AW-977554012');
    this.checkUser();

    this.userStateService.onUser.subscribe(data => {
      this.user = data;

    })
    this.userStateService.onSignIn.subscribe(data => {
      this.signIn();
    })
    this.userSocketService.money_change.subscribe(data => {
      this.user.money = Number(data);
      this.userStateService.setUserData(this.user);
    })
    this.userSocketService.notification.subscribe((data: UserNotification) => {
      this.toastr.info(data.message, data.title);
    });
  }
  public signIn() {
    this.authService.doGoogleLogin().then(data => {
      console.log("data", data);
      firebase.auth().currentUser.getIdToken(true).then((idToken) => {
        // Send token to your backend via HTTPS
        console.log("idToken", idToken);
        this.authService.signIn(idToken).subscribe(res => {
          this.checkUser();
        })
        // ...
      }).catch(function (error) {
        // Handle error
      });

    })

  }
  public checkUser() {
    this.authService.checkUser().subscribe(data => {
      console.log('data', data);
      this.userStateService.setUserData(new User(data));
      this.userSocketService.onInit(new User(data));
      this.supportSocketService.onInit(new User(data));
      this.countSupport = this.supportStateService.getCount();
    }, err => {

    })
  }
  getSupportText() {
    return (this.countSupport > 0) ? `Поддержка (${this.countSupport})` : 'Поддержка';
  }
  toggleLeftMenu() {
    this._opened = !this._opened;
  }

}
