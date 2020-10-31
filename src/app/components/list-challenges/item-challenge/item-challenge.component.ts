import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { subjects_workout_junior_challenge_ru, descriptions_workout_junior_challenge_ru, requirements_workout_junior_challenge_ru, TYPE_WORKOUT } from 'src/app/const/const';
import { ItemListChallenge } from '../class/item-list-challenge';
import { RulesComponent } from '../rules/rules.component';

@Component({
  selector: 'app-item-challenge',
  templateUrl: './item-challenge.component.html',
  styleUrls: ['./item-challenge.component.scss']
})
export class ItemChallengeComponent implements OnInit {
  @Input() item: ItemListChallenge;
  TYPE_WORKOUT:string = TYPE_WORKOUT;
  subjects_workout_junior_challenge_ru: Array<string> = subjects_workout_junior_challenge_ru;
  descriptions_workout_junior_challenge_ru: Array<string> = descriptions_workout_junior_challenge_ru;
  requirements_workout_junior_challenge_ru: Array<string> = requirements_workout_junior_challenge_ru;
  constructor(  ) { }

  ngOnInit() {
  }


}
