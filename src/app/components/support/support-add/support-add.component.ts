import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { hit_support_input, support_subjects, txt_error_send_message_chat, txt_support_add_successful } from 'src/app/const/const-txt';
import { SupportService } from 'src/app/services/support/support.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { Alert } from '../../list-challenges/class/alert';

@Component({
  selector: 'app-support-add',
  templateUrl: './support-add.component.html',
  styleUrls: ['./support-add.component.scss']
})
export class SupportAddComponent implements OnInit {
  user: User = new User();
  alert: Alert = new Alert();
  list_subjects: Array<string> = support_subjects;
  hit_support_input: string = hit_support_input;
  subject: string;
  question: string = "";
  constructor(private supportService: SupportService,
    private userStateService: UserStateService,) { }

  ngOnInit() {
    this.subject = this.list_subjects[0];
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })
  }
  selectSubject(data) {
    this.subject = data;
  }
  create() {
    this.supportService.createTicket(this.subject, this.question).subscribe(data => {
      this.alert.setData("success", txt_support_add_successful);
      this.question = "";
    }, err => {
      this.alert.setData("danger", txt_error_send_message_chat);
    })
  }
  public trackByIndex(index, item) {
    return index;
  }
}
