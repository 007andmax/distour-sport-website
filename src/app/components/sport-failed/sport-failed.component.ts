import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-failed',
  templateUrl: './sport-failed.component.html',
  styleUrls: ['./sport-failed.component.scss']
})
export class SportFailedComponent implements OnInit {

  id: string;
  constructor(private activateRoute: ActivatedRoute){
       
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
     
  }

}
