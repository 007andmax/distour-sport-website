import { EventEmitter, Injectable } from '@angular/core';
 
import { map } from 'rxjs/operators';
import io from 'socket.io-client';
import { ChallengeItem } from 'src/app/interfaces/socket-challenge-item';
import { ChallengeItemUser } from 'src/app/interfaces/socket-challenge-item-user';

@Injectable({
  providedIn: 'root'
})
export class ChallengeSocketService {
  add_challenge = new EventEmitter<any>();
  upload_video = new EventEmitter<any>();
  add_user = new EventEmitter<any>();
  socketServer;
  constructor() { 
    this.socketServer = io.connect('http://81.30.156.22:1236/challenge');
    this.socketServer.on('connect', (data) => {
      console.log("connect ChallengeSocketService",data);
    });
    this.socketServer.on('add_challenge', (msg:ChallengeItem) => {
      console.log(" onInitSocketServer", msg);
      this.add_challenge.emit(msg);
    });
    this.socketServer.on('upload_video', (msg) => {
      console.log(" upload_video", msg);
      this.upload_video.emit(msg);
    });
    this.socketServer.on('add_user', (msg:ChallengeItemUser) => {
      console.log(" add_user", msg);
      this.add_user.emit(msg);
    });
   
  }
  


}
