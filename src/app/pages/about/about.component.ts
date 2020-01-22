import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})
export class AboutComponent implements OnInit, OnDestroy {
  markdown;
  private req;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.req = this.api.aboutData()
      .subscribe(data => this.markdown = data);
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
