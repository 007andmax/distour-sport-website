import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss']
})
export class ShowVideoComponent implements OnInit {
  videoUrl: any;
  constructor(private activateRoute: ActivatedRoute,public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.activateRoute.snapshot.params['video'];
    console.log("videoUrl",this.videoUrl);
  }

}
