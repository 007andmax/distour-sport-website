import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/class/user';
import { environment } from 'src/environments/environment';
import io from 'socket.io-client';
import { SupportService } from '../support/support.service';
import { SupportStateService } from 'src/app/state/support/support-state.service';

@Injectable({
  providedIn: 'root'
})
export class SupportSocketService {
  private apiSocket = environment.apiSocket;
  apiUrl = environment.apiUrl;
  socketServer;
  add_answer = new EventEmitter<any>();
  add_question = new EventEmitter<any>();
  constructor(private supportService: SupportService,
    private supportStateService: SupportStateService) {

  }
  public onInit(user: User) {
    this.socketServer = io.connect(`${this.apiUrl}support`);
    this.socketServer.emit("create_room", { _id: user._id })
    this.socketServer.on('connect', (data) => {
      console.log("connect SupportSocketService", data);
    });
    this.socketServer.on('add_answer', (msg) => {
      console.log(" add_answer", msg);
      this.add_answer.emit(msg);
    });
    this.socketServer.on('add_question', (msg) => {
      console.log(" add_question", msg);
      this.add_question.emit(msg);
    });
    this.supportService.getCount().subscribe((data: any) => {
      this.supportStateService.setCount(data.count);
    })
  }

}
