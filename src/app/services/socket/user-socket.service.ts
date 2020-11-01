import { EventEmitter, Injectable } from '@angular/core';
import io from 'socket.io-client';
import { User } from 'src/app/class/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSocketService {
  private apiSocket = environment.apiSocket;
  money_change = new EventEmitter<any>();
  notification = new EventEmitter<any>();
  socketServer;
  constructor() { 
   
  }
  public onInit(user:User) {
    this.socketServer = io.connect(`${this.apiSocket}user`);
    this.socketServer.emit("create_room",{_id:user._id})
    this.socketServer.on('connect', (data) => {
      console.log("connect UserSocketService",data);
    });
    this.socketServer.on('money_change', (msg) => {
      console.log(" money_change", msg);
      this.money_change.emit(msg);
    });
    this.socketServer.on('notification', (msg) => {
      console.log(" notification", msg);
      this.notification.emit(msg);
    });
  }
}
