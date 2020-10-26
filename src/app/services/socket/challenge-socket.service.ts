import { EventEmitter, Injectable } from '@angular/core';
 
import { map } from 'rxjs/operators';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChallengeSocketService {
  add_challenge = new EventEmitter<any>();
  socketServer;
  constructor() { 
    this.socketServer = io.connect('http://81.30.156.22:1236/challenge');
    this.socketServer.on('connect', (data) => {
      console.log("connect ChallengeSocketService",data);
      this.socketServer.on('add_challenge', (msg) => {
        console.log(" onInitSocketServer", msg);
        this.add_challenge.emit(msg);
      });
      this.socketServer.on('event', (msg) => {
        console.log(" onInitSocketServer", msg);
        this.add_challenge.emit(msg);
      });
    });
   
  }
  


}
