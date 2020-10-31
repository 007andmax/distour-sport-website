import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/class/user';
import { subjects_workout_junior_challenge_ru, descriptions_workout_junior_challenge_ru, requirements_workout_junior_challenge_ru, TYPE_WORKOUT, photos_workout_junior_1, photos_workout_junior_10, photos_workout_junior_2, photos_workout_junior_3, photos_workout_junior_4, photos_workout_junior_5, photos_workout_junior_6, photos_workout_junior_7, photos_workout_junior_8, photos_workout_junior_9, RANK_JUNIOR, TYPE_FREE, ranks, rank_txt } from 'src/app/const/const';
import { txt_add_challenge_success, txt_not_exist_money_add_challenge, txt_service_busy } from 'src/app/const/const-txt';
import { ChallengeService } from 'src/app/services/challenge/challenge.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { Alert } from '../../class/alert';
import { HowDoComponent } from '../../how-do/how-do.component';

@Component({
  selector: 'app-add-item-challenge',
  templateUrl: './add-item-challenge.component.html',
  styleUrls: ['./add-item-challenge.component.scss']
})
export class AddItemChallengeComponent implements OnInit {
  alert: Alert = new Alert();
  user: User = new User();
  @Input() index: number = 0;
  @Input() type = TYPE_WORKOUT;
  @Input() rank = RANK_JUNIOR;
  @Input() bet = 0.25;
  TYPE_WORKOUT:string = TYPE_WORKOUT;
  subjects_workout_junior_challenge_ru: Array<string> = subjects_workout_junior_challenge_ru;
  descriptions_workout_junior_challenge_ru: Array<string> = descriptions_workout_junior_challenge_ru;
  requirements_workout_junior_challenge_ru: Array<string> = requirements_workout_junior_challenge_ru;

  constructor(private modalService: NgbModal,
    private userStateService: UserStateService,
    private challengeService: ChallengeService) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = new User(data);
    })
    console.log("index", this.index);
  }
  getRankText() {
    let index = ranks.findIndex(item => item === this.rank);
    return rank_txt[index];
  }
  checkCreate() {
    if (this.user.isAnonimno()) return false;
    if (this.user.money < this.bet) return false;
    if (this.user.rank != this.rank) return false;
    return true;
  }
  create() {
    this.challengeService.add(this.index, this.bet, this.rank, this.type).subscribe((data: any) => {
      if (data.message == 0) {
        this.alert.setData("success", txt_add_challenge_success);
      }
      if (data.message == 1) {
        this.alert.setData("warning", txt_not_exist_money_add_challenge);
      }
      if (data.message == 2) {
        this.alert.setData("danger", txt_service_busy);
      }
    }, err => {
      this.alert.setData("danger", txt_service_busy);
    })
  }
  public showHowDo() {
    let images = [];
    if ((this.type === TYPE_WORKOUT || this.type === TYPE_FREE) && this.rank === RANK_JUNIOR) {
      if (this.index === 0) images = photos_workout_junior_1;
      if (this.index === 1) images = photos_workout_junior_2;
      if (this.index === 2) images = photos_workout_junior_3;
      if (this.index === 3) images = photos_workout_junior_4;
      if (this.index === 4) images = photos_workout_junior_5;
      if (this.index === 5) images = photos_workout_junior_6;
      if (this.index === 6) images = photos_workout_junior_7;
      if (this.index === 7) images = photos_workout_junior_8;
      if (this.index === 8) images = photos_workout_junior_9;
      if (this.index === 9) images = photos_workout_junior_10;
    }
    console.log("images", images);
    const modalRef = this.modalService.open(HowDoComponent);
    modalRef.componentInstance.images = images;

  }
}
