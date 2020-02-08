import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,
  HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, from, throwError } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { About, Contact, Skill, Work } from './models/index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private about$: Observable<any>;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.about$ = this.http.get<About[]>(
      this.apiUrl+'infos/about').pipe(
        switchMap((response: About[]) => from(response)),
				catchError(this.errorMgmt)
      );
  }

  private getCookie(name){
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }

  aboutData(): Observable<any> {
    return this.about$.pipe(
      filter((data: About) => data.selection==="about"),
      map(data => data.content),
			catchError(this.errorMgmt)
    );
  }

  skillsData(): Observable<any> {
    return this.about$.pipe(
      filter((data: About) => data.selection==="skills"),
      map(data => data.content),
			catchError(this.errorMgmt)
    );
  }

  workData(): Observable<any> {
    return this.about$.pipe(
      filter((data: About) => data.selection==="work"),
      map(data => data.content),
			catchError(this.errorMgmt)
    );
  }

  skillsIcons(): Observable<any> {
    return this.http.get<Skill[]>(this.apiUrl+"infos/skills");
  }

  workList(): Observable<any> {
    return this.http.get<Work[]>(this.apiUrl+"infos/work");
  }

  postContact(contact: Contact): Observable<any> {
  	let httpOptions = {
  		headers: new HttpHeaders({
    		'Content-Type':  'application/json',
      	'X-CSRFToken': this.getCookie('csrftoken')
  		})
		};
    return this.http.post<Contact>(
      this.apiUrl+"contact/create", contact, httpOptions).pipe(
				catchError(this.errorMgmt)
			);
  }

  private errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
