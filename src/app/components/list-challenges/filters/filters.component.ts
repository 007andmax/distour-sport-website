import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { types, ranks } from 'src/app/const/const';
import { types_txt, rank_txt } from 'src/app/const/const-txt';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  listType: Array<string> = types_txt;
  listRank: Array<string> = rank_txt;
  @Output() onChangeType = new EventEmitter<any>();
  @Output() onChangeRank = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  selectType(i) {
    this.onChangeType.emit(types[i]);
  }
  selectRank(i) {
    this.onChangeRank.emit(ranks[i]);
  }
  public trackByIndex(index, item) {
    return index;
  }
}
