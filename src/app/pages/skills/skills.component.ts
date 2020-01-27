import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.styl']
})
export class SkillsComponent implements OnInit, OnDestroy {
  private req;
  private req2;
  markdown;
  icons;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.req = this.api.skillsData()
      .subscribe(response => this.markdown = response);
    this.req2 = this.api.skillsIcons()
      .subscribe(response => this.icons = response);
  }

  ngOnDestroy() {
    this.req.unsubscribe();
    this.req2.unsubscribe();
  }

}
