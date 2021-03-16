import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { status_support_txt } from 'src/app/const/const-txt';
import { SupportSocketService } from 'src/app/services/socket/support-socket.service';

import { SupportService } from 'src/app/services/support/support.service';
import { SupportStateService } from 'src/app/state/support/support-state.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { FilterSupport } from './class/filter-support';
import { SupportItem } from './class/support-item';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  user: User = new User();
  list: Array<SupportItem> = [];
  blockScroll: boolean = false;
  filter: FilterSupport = new FilterSupport();
  public infiniteScrollDisabled = true;
  constructor(private userStateService: UserStateService,
    private supportStateService: SupportStateService,
    private supportSocketService: SupportSocketService,
    private supportService: SupportService) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = data;
    })
    this.getList();
    this.supportSocketService.add_answer.subscribe(data => {
      let findIndex = this.list.findIndex(item => item._id === data._id);
      if (findIndex > -1) {
        let answer = data.list[data.list.length - 1].answer;
        let time = data.list[data.list.length - 1].time;
        this.list[findIndex].list[this.list[findIndex].list.length - 1].setAnswer(answer);
        this.list[findIndex].list[this.list[findIndex].list.length - 1].setTime(time);
        this.list[findIndex].list[this.list[findIndex].list.length - 1].setViewed(false);
        this.supportStateService.setCount(this.supportStateService.getCount() + 1);
      }
    })
  }
  getList() {
    if (this.blockScroll) {
      this.infiniteScrollDisabled = false;
      return;
    }
    this.supportService.getList(this.filter.getDataForRequest()).subscribe(data => {
      this.list = [...this.list, ...data];
      this.supportStateService.setListSupport(this.list);
      if (data.length < 10) this.blockScroll = true;
      console.log("this.list", this.list);
      this.infiniteScrollDisabled = false;
    })
  }
  onChangeStatus(data) {
    this.filter.setCancel((data == status_support_txt[0] ? false : true));
    this.resetList();
  }
  resetList() {
    this.infiniteScrollDisabled = true;
    this.filter.page = 0;
    this.blockScroll = false;
    this.getList();
  }
  public onScroll() {
    this.infiniteScrollDisabled = true;
    this.filter.page++;
    this.getList();

  }
  public trackById(index, item) {
    return item._id;
  }
}
