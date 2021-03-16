import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { status_support_txt } from 'src/app/const/const-txt';


@Component({
  selector: 'app-support-filter',
  templateUrl: './support-filter.component.html',
  styleUrls: ['./support-filter.component.scss']
})
export class SupportFilterComponent implements OnInit {

  listStatus: Array<string> = status_support_txt;
  status: string;
  @Output() onChangeStatus = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.status = this.listStatus[0];
  }
  selectStatus(i) {
    this.status = this.listStatus[i];
    this.onChangeStatus.emit(this.listStatus[i]);
  }

  public trackByIndex(index, item) {
    return index;
  }

}
