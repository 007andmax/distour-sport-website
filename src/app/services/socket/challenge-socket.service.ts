import { EventEmitter, Injectable } from '@angular/core';
 
import { map } from 'rxjs/operators';
import io from 'socket.io-client';
import { ChallengeItem } from 'src/app/interfaces/socket-challenge-item';
import { ChallengeItemFinish } from 'src/app/interfaces/socket-challenge-item-finish';
import { ChallengeItemJudge } from 'src/app/interfaces/socket-challenge-item-judge';
import { ChallengeItemUser } from 'src/app/interfaces/socket-challenge-item-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengeSocketService {
  private apiSocket = environment.apiSocket;
  add_challenge = new EventEmitter<any>();
  add_judge = new EventEmitter<any>();
  upload_video = new EventEmitter<any>();
  add_user = new EventEmitter<any>();
  finish_challenge = new EventEmitter<any>();
  socketServer;
  constructor() { 
    this.socketServer = io.connect(`${this.apiSocket}challenge`);
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
    this.socketServer.on('add_judge', (msg:ChallengeItemJudge) => {
      console.log(" add_judge", msg);
      this.add_judge.emit(msg);
    });
    this.socketServer.on('add_user', (msg:ChallengeItemUser) => {
      console.log(" add_user", msg);
      this.add_user.emit(msg);
    });
    this.socketServer.on('finish_challenge', (msg:ChallengeItemFinish) => {
      console.log(" finish_challenge", msg);
      this.finish_challenge.emit(msg);
    });
   
  }
  


}
