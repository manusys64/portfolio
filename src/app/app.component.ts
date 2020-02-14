/* tslint:disable:no-string-literal */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { mergeMap, filter, map, tap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private metaTagService: Meta,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      }),
      filter((route) => route.outlet ==='primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event['title']));

    this.metaTagService.addTags([
		  { name: 'keywords', content: 'Full Stack Developer, Web Development, Blockchain' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Ryusuke Lavalla' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-2-1', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { name: 'description', content: 'Ryusuke is a full stack web developer, Blockchain developer, Full stack application developer, based in Brooklyn New York.'}
		]);
  }

}
