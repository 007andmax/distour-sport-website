import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/class/user';
import { ROLE_ADMIN, ROLE_JUDGE } from 'src/app/const/const';
import { txt_info_participate_in_challenge_success, txt_info_add_judge_failed, txt_service_busy } from 'src/app/const/const-txt';
import { ChallengeService } from 'src/app/services/challenge/challenge.service';
import { Alert } from '../../class/alert';
import { InfoChallenge } from '../../class/info-challenge';
import { Judge } from '../../class/judge';
import { ParticipantChallenge } from '../../class/participant-challenge';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {
  alert: Alert = new Alert();
   
  @Input() user: User;
  @Input() challenge: InfoChallenge;
  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
  }
  checkUser() {
    if (this.user.isAnonimno()) return false;
    if (this.user.role != ROLE_JUDGE && this.user.role != ROLE_ADMIN) return false;
    if (this.challenge.judge) return false;
    return true;
  }
  addJudge() {
    this.challengeService.addJudge(this.challenge._id).subscribe((data:any) => {
      if (data.message == 0) {
        this.alert.setData("success", txt_info_participate_in_challenge_success);
        
    }
    if (data.message == 1) {

      this.alert.setData("danger", txt_info_add_judge_failed);
    }
    }, err => {
      this.alert.setData("danger", txt_service_busy);
    })
  }
 
}
