import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'src/app/class/user';
import { list_boys } from 'src/app/const/const';
import { AuthService } from 'src/app/services/app/auth.service';
import { UserStateService } from 'src/app/state/user/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = list_boys;
  constructor(private authService: AuthService, private userStateService: UserStateService) { }
  ngOnInit(): void {



  }

  public trackByIndex(index, item) {
    return index;
  }


}
