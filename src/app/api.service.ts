import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, from } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  about$: Observable<any>;
  constructor(private http: HttpClient) {
    this.about$ = this.http.get(
      this.apiUrl+'infos/about').pipe(
        switchMap((response:any) => from(response))
      );
  }

  aboutData(): Observable<any> {
    return this.about$.pipe(
      filter((data: any) => data.selection==="about"),
      map(data => data.content)
    );
  }

  skillsData(): Observable<any> {
    return this.about$.pipe(
      filter((data: any) => data.selection==="skills"),
      map(data => data.content)
    );
  }

  workData(): Observable<any> {
    return this.about$.pipe(
      filter((data: any) => data.selection==="work"),
      map(data => data.content)
    );
  }

  skillsIcons(): Observable<any> {
    return this.http.get(this.apiUrl+"infos/skills");
  }

  postContact(contact): Observable<any> {
    return this.http.post(
      this.apiUrl+"contact/create", contact);
  }

}
