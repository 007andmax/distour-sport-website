import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-how-do',
  templateUrl: './how-do.component.html',
  styleUrls: ['./how-do.component.scss']
})
export class HowDoComponent implements OnInit {
  
  @Input() public images;
  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log("images",this.images);
  }
  closeModal() {
    this.activeModal.close();
  }
}
