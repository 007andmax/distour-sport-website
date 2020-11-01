import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user/user.service';
import { UserStateService } from 'src/app/state/user/user-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User = new User();
  @Output() onToggleMenu = new EventEmitter<any>();
  constructor(private userStateService: UserStateService,
    private userService: UserService) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })
  }
  signIn() {
    this.userStateService.signIn();
  }
  logOut() {
    this.userService.logOut().subscribe(data => {
      firebase.auth().signOut().then(function() {
        window.location.href = "/";
      }).catch(function(error) {
        window.location.href = "/";
      });
    
    })
  }
  toggleLeftMenu() {
    this.onToggleMenu.emit(true);
  }
}
