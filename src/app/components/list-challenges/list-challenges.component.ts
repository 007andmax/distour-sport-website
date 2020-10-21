import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { ChallengeService } from 'src/app/services/challenge/challenge.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { FilterChallenge } from './class/filter-challenge';
import { ItemListChallenge } from './class/item-list-challenge';

@Component({
  selector: 'app-list-challenges',
  templateUrl: './list-challenges.component.html',
  styleUrls: ['./list-challenges.component.scss']
})
export class ListChallengesComponent implements OnInit {
  user: User = new User();
  list: Array<ItemListChallenge> = [];
  filter: FilterChallenge = new FilterChallenge();
  blockScroll:boolean = false;
  public infiniteScrollDisabled = true;
  constructor(private challengeService: ChallengeService,
    private userStateService: UserStateService,) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = new User(data);
    })
    this.getList();
  }
  getList() {
    if (this.blockScroll) {
      this.infiniteScrollDisabled = false;
      return;
    }
    this.challengeService.getList(this.filter.getDataForRequest()).subscribe(data => {
      this.list = data;
      if (data.length < 10) this.blockScroll = true;
      console.log("this.list",this.list);
      this.infiniteScrollDisabled = false;
    })
  }
  onChangeType(data) {
    this.filter.type = data;
    this.resetList();
  }
  onChangeRank(data) {
    this.filter.rank = data;
    this.resetList();
  }
  resetList() {
    this.infiniteScrollDisabled = true;
    this.filter.page = 0;
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