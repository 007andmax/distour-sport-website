import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-success',
  templateUrl: './sport-success.component.html',
  styleUrls: ['./sport-success.component.scss']
})
export class SportSuccessComponent implements OnInit {

  id: string;
  constructor(private activateRoute: ActivatedRoute){
       
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
