import { Component, OnInit } from '@angular/core';
import { subjects_workout_junior_challenge_ru } from 'src/app/const/const';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.scss']
})
export class AddChallengeComponent implements OnInit {
  subjects:Array<string> = subjects_workout_junior_challenge_ru;
  constructor() { }

  ngOnInit() {
  }
  public onChangeType(data) {

  }
  public onChangeRank(data) {

  }
  public trackByIndex(index, item) {
    return index;
  }
}
