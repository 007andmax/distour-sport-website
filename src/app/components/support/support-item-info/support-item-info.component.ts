import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/user';
import { hit_support_input, txt_closed_support_success, txt_close_support_item, txt_error_send_message_chat, txt_support_add_successful } from 'src/app/const/const-txt';
import { SupportSocketService } from 'src/app/services/socket/support-socket.service';
import { SupportService } from 'src/app/services/support/support.service';
import { SupportStateService } from 'src/app/state/support/support-state.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { Alert } from '../../list-challenges/class/alert';
import { SupportItem } from '../class/support-item';

@Component({
  selector: 'app-support-item-info',
  templateUrl: './support-item-info.component.html',
  styleUrls: ['./support-item-info.component.scss']
})
export class SupportItemInfoComponent implements OnInit {
  alert: Alert = new Alert();
  item: SupportItem;
  question: string = "";
  hit_support_input: string = hit_support_input;
  user: User = new User();
  txt_close_support_item = txt_close_support_item;
  constructor(private activateRoute: ActivatedRoute,
    private supportService: SupportService,
    private supportSocketService: SupportSocketService,
    private userStateService: UserStateService,
    private supportStateService: SupportStateService,) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })
    let id = this.activateRoute.snapshot.params['id'];
    this.item = this.supportStateService.getListSupport().find(item => item._id === id);
    this.supportSocketService.add_answer.subscribe(data => {
      if (this.item._id === data._id) {
        let answer = data.list[data.list.length - 1].answer;
        let time = data.list[data.list.length - 1].time;
        this.item.list[this.item.list.length - 1].setAnswer(answer);
        this.item.list[this.item.list.length - 1].setTime(time);
        this.setViewdQuestion();
      }
    })
    if (!this.item.list[this.item.list.length - 1].viewed) this.setViewdQuestion();
  }
  setViewdQuestion() {
    this.supportService.setViewdQuestion(this.item._id).subscribe(data => {
      this.item.list[this.item.list.length - 1].setViewed(true);
      this.supportStateService.setCount(this.supportStateService.getCount() - 1);
    })
  }
  getAnswer(value) {
    return (value == "none") ? "No exist answer" : value;
  }
  getDate(date) {
    return new Date(date);
  }
  isExistAnswer() {
    return this.item.list[this.item.list.length - 1].answer !== "none";
  }
  send() {
    this.supportService.addQuestion(this.item._id, this.question).subscribe(data => {
      this.item.addQuestion(this.question);
      this.question = "";
      this.alert.setData("success", txt_support_add_successful);
    }, err => {
      this.alert.setData("danger", txt_error_send_message_chat);
    })
  }
  closed() {
    this.supportService.closed(this.item._id).subscribe(data => {
      this.item.setCancel(true);
      this.alert.setData("success", txt_closed_support_success);
    })
  }
  public trackById(index, item) {
    return item._id;
  }
}
