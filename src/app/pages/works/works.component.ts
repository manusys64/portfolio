import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.styl']
})
export class WorksComponent implements OnInit, OnDestroy {
  private req;
  works;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.req = this.api.workList()
      .subscribe(response => this.works = response);
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
