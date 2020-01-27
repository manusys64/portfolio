import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';
import * as data from './aboutData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})
export class AboutComponent implements OnInit, OnDestroy {
  markdown;
  private req;
  points;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.points = data;
    this.req = this.api.aboutData()
      .subscribe(response => this.markdown = response);
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
