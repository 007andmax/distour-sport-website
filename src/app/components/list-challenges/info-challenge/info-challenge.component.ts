import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/class/user';
import { subjects_workout_junior_challenge_ru, descriptions_workout_junior_challenge_ru, requirements_workout_junior_challenge_ru, TYPE_WORKOUT, photos_workout_junior_1, photos_workout_junior_2, photos_workout_junior_3, photos_workout_junior_4, photos_workout_junior_5, photos_workout_junior_6, photos_workout_junior_7, photos_workout_junior_8, photos_workout_junior_9, photos_workout_junior_10, TYPE_FREE, RANK_JUNIOR, ROLE_JUDGE } from 'src/app/const/const';
import { txt_info_add_judge_failed, txt_info_participate_in_challenge_success, txt_not_exist_money_participate_challenge, txt_service_busy } from 'src/app/const/const-txt';
import { ChallengeItemUser } from 'src/app/interfaces/socket-challenge-item-user';
import { ChallengeService } from 'src/app/services/challenge/challenge.service';
import { ChallengeSocketService } from 'src/app/services/socket/challenge-socket.service';
import { UserStateService } from 'src/app/state/user/user-state.service';
import { Alert } from '../class/alert';
import { InfoChallenge } from '../class/info-challenge';
import { ParticipantChallenge } from '../class/participant-challenge';
import { HowDoComponent } from '../how-do/how-do.component';
import { RulesComponent } from '../rules/rules.component';

@Component({
  selector: 'app-info-challenge',
  templateUrl: './info-challenge.component.html',
  styleUrls: ['./info-challenge.component.scss']
})
export class InfoChallengeComponent implements OnInit {
  alert: Alert = new Alert();
  user: User = new User();
  challenge: InfoChallenge;
  showPreloader: boolean = true;
  subjects_workout_junior_challenge_ru: Array<string> = subjects_workout_junior_challenge_ru;
  descriptions_workout_junior_challenge_ru: Array<string> = descriptions_workout_junior_challenge_ru;
  requirements_workout_junior_challenge_ru: Array<string> = requirements_workout_junior_challenge_ru;

  constructor(private activateRoute: ActivatedRoute,
    private userStateService: UserStateService,
    private modalService: NgbModal,
    private challengeSocketService: ChallengeSocketService,
    private challengeService: ChallengeService) {


  }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.userStateService.onUser.subscribe(data => {
      this.user = new User(data);
    })
    let id = this.activateRoute.snapshot.params['id'];
    this.challengeService.getChallenge(id).subscribe(data => {
      this.challenge = data;
      console.log("challenge", this.challenge);
      this.showPreloader = false;
    })
    this.challengeSocketService.upload_video.subscribe(data => {
      if (data.challenge_id == this.challenge._id) {
        let index = this.challenge.participants.findIndex(item => item._id == data.user_id);
        if (index > -1) this.challenge.participants[index].video = data.video;
      }
    })
    this.challengeSocketService.add_user.subscribe((data: ChallengeItemUser) => {
      if (data.challenge_id == this.challenge._id) this.challenge.participants.push(new ParticipantChallenge({
        ...data, rating: -1, video: "none", winner: false
      }))
    })

  }
  checkUser() {
    if (this.user.isAnonimno()) return false;
    if (this.challenge.participants.find(item => item._id == this.user._id)) return false;
    if (this.challenge.rank != this.user.rank) return false;
    if (this.user.role == ROLE_JUDGE) return false;
    if (this.user.money < this.challenge.bet) return false;
    return true;
  }
  addUser() {
    this.challengeService.participate(this.challenge._id).subscribe((data: any) => {
      if (data.message == 0) {
        this.alert.setData("success", txt_info_participate_in_challenge_success);
      }
      if (data.message == 1) {
        this.alert.setData("warning", txt_not_exist_money_participate_challenge);
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
    if ((this.challenge.type === TYPE_WORKOUT || this.challenge.type === TYPE_FREE) && this.challenge.rank === RANK_JUNIOR) {
      if (this.challenge.index === 0) images = photos_workout_junior_1;
      if (this.challenge.index === 1) images = photos_workout_junior_2;
      if (this.challenge.index === 2) images = photos_workout_junior_3;
      if (this.challenge.index === 3) images = photos_workout_junior_4;
      if (this.challenge.index === 4) images = photos_workout_junior_5;
      if (this.challenge.index === 5) images = photos_workout_junior_6;
      if (this.challenge.index === 6) images = photos_workout_junior_7;
      if (this.challenge.index === 7) images = photos_workout_junior_8;
      if (this.challenge.index === 8) images = photos_workout_junior_9;
      if (this.challenge.index === 9) images = photos_workout_junior_10;
    }
    console.log("images", images);
    const modalRef = this.modalService.open(HowDoComponent);
    modalRef.componentInstance.images = images;

  }
  public showRules() {
    const modalRef = this.modalService.open(RulesComponent);

  }

}
