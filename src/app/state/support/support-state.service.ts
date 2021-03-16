import { Injectable } from '@angular/core';
import { SupportItem } from 'src/app/components/support/class/support-item';

@Injectable({
  providedIn: 'root'
})
export class SupportStateService {
  count: number = 0;
  listSupport: Array<SupportItem> = [];
  constructor() { }
  public setListSupport(data) {
    this.listSupport = data;
  }
  public getListSupport() {
    return this.listSupport;
  }
  public setCount(data) {
    this.count = data;
  }
  public getCount() {
    return this.count;
  }
}
