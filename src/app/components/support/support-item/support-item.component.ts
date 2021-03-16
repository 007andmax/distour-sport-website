import { Component, Input, OnInit } from '@angular/core';
import { SupportItem } from '../class/support-item';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent implements OnInit {
  @Input() item: SupportItem;
  constructor() { }

  ngOnInit() {
  }
  getLastQuestion() {
    let question = this.item.list[this.item.list.length - 1].question;
    return question;
  }
  getLastDate() {
    let date = this.item.list[this.item.list.length - 1].time;
    return new Date(date);
  }
  getLastAnser() {
    let answer = this.item.list[this.item.list.length - 1].answer;
    return (answer == "none") ? "No exist answer" : answer;
  }
}
