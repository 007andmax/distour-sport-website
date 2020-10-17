import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  onUser = new EventEmitter<any>();
  onSignIn = new EventEmitter<any>();
  user: User = new User();
  constructor() { }

  public getUser() {
    return this.user;
  }
  public signIn() {
    this.onSignIn.emit(null);
  }
  public setUserData(data) {
    this.user = data;
    this.onUser.emit(data);
  }
}
