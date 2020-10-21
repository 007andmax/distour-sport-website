import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    console.log("this.user",this.user);
    this.userStateService.onUser.subscribe(data => {
      this.user = new User(data);
    })
  }
  signIn() {
    this.userStateService.signIn();
  }
  logOut() {
    this.userService.logOut().subscribe(data => {
      window.location.href = "/";
    })
  }
  toggleLeftMenu() {
    this.onToggleMenu.emit(true);
  }
}
