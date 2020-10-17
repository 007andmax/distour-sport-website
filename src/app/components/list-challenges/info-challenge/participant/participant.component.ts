import { Component, Input, OnInit, ViewChild } from '@angular/core';
 
import { User } from 'src/app/class/user';
import { ROLE_ADMIN, ROLE_JUDGE } from 'src/app/const/const';
import { txt_info_set_winner_success, txt_info_to_big_file, txt_info_uplaod_failed, txt_info_uplaod_success, txt_service_busy } from 'src/app/const/const-txt';
import { ChallengeService } from 'src/app/services/challenge/challenge.service';
import { environment } from 'src/environments/environment';
import { Alert } from '../../class/alert';
import { InfoChallenge } from '../../class/info-challenge';
import { ParticipantChallenge } from '../../class/participant-challenge';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  alert: Alert = new Alert();
  alertWinner: Alert = new Alert();
  percent: number = 0;
  isUploading: boolean = false;
  blockUpload: boolean = false;
  @ViewChild('fileInput', { static: false }) fileInput: any;
  @Input() user: User = new User();
  @Input() challenge: InfoChallenge;
  private apiUrl = environment.apiUrl

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    console.log("fileInput", this.fileInput);
  }
  checkUploadVideo(participant) {
    if (this.user.isAnonimno()) return false;
    if (participant.video != "none") return false;
    if (participant._id != this.user._id) return false;
    return true;
  }
  uploadVideo(file) {


    if (file.target.files && file.target.files[0]) {
      console.log("fileInput.target.files[0]", file.target.files[0]);
      let fileData = file.target.files[0];
      if (fileData.size > 200000000) {
        this.alert.setData("danger", txt_info_to_big_file);
        return;
      } else {

        this.alert.close();
      }
      this.isUploading = true;
      this.percent = 0;
      var formdata = new FormData();
      formdata.append("upload", fileData);
      var ajax = new XMLHttpRequest();
      ajax.upload.addEventListener("progress", this.progressHandler, false);
      ajax.addEventListener("load", this.completeHandler, false);
      ajax.addEventListener("error", this.errorHandler, false);

      ajax.open("POST", `${this.apiUrl}challenge/upload?challenge_id=${this.challenge._id}`); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP

      ajax.send(formdata);

    }


  }

  checkJudge() {
    if (this.user.isAnonimno()) return false;
    if (this.user.role != ROLE_JUDGE && this.user.role != ROLE_ADMIN) return false;
    if (!this.challenge.judge) return false;
    if (this.user._id != this.challenge.judge._id) return false;
    return true;
  }
  setWinner(participant) {
    this.challengeService.setWinner(this.challenge._id, participant._id).subscribe(data => {
      this.alertWinner.setData("success", txt_info_set_winner_success);
    },err => {
      this.alert.setData("danger", txt_service_busy);
    })
  }
  progressHandler = (event) => {

    this.percent = Math.round((event.loaded / event.total) * 100);

  }

  completeHandler = (event) => {
    this.alert.setData("success", txt_info_uplaod_success);
    this.isUploading = false;
  }

  errorHandler = (err) => {
    console.log("err", err);
    this.isUploading = false;
    this.alert.setData("danger", txt_info_uplaod_failed);
    this.fileInput.nativeElement.value = null;
  }

  isAddVideo(participant) {
    if (participant._id == this.user._id) {
      return (participant.video == "none") ? true : false;
    } else {
      return false;
    }

  }

  public trackById(index, item) {
    return item._id;
  }
}
