import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { User } from './class/user';
import { AuthService } from './services/app/auth.service';
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
    private userStateService:UserStateService) { }

   
 
  ngOnInit(): void {
   /* this.toastr.success('Hello world!', ' My name is Inigo Montoya. You killed my father. Prepare to die! ',{
      disableTimeOut :true
    });*/
    this.checkUser();

    this.userStateService.onUser.subscribe(data => {
      this.user = new User(data);
    })
    this.userStateService.onSignIn.subscribe(data => {
      this.signIn();
    })

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
    }, err => {

    })
  }
  toggleLeftMenu() {
    this._opened = !this._opened;
  }
   
}
