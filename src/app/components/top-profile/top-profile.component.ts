import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/app/auth.service';

@Component({
  selector: 'app-top-profile',
  templateUrl: './top-profile.component.html',
  styleUrls: ['./top-profile.component.scss']
})
export class TopProfileComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  public signIn() {
    this.authService.doGoogleLogin().then(data => {
      console.log("data", data);
      this.authService.signIn(data.credential.accessToken).subscribe(res => {
        this.checkUser();
      })
    })

  }
  public checkUser() {
    this.authService.checkUser().subscribe(data => {
      console.log('data', data);
    }, err => {

    })
  }
  public logOut() {
    this.authService.logOut().subscribe(data => {
      this.user = new User();
    })
  }
}
