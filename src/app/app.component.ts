import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { User } from './class/user';
import { UserNotification } from './interfaces/socket-user-notification';
import { AuthService } from './services/app/auth.service';
import { UserSocketService } from './services/socket/user-socket.service';
import { UserStateService } from './state/user/user-state.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  _opened: boolean = false;
  user: User = new User();

  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private userSocketService: UserSocketService,
    private userStateService: UserStateService) { }



  ngOnInit(): void {
   
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
    this.userSocketService.notification.subscribe((data:UserNotification) => {
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
    }, err => {

    })
  }
  toggleLeftMenu() {
    this._opened = !this._opened;
  }

}
