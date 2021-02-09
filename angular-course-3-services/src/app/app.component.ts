import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //declaring courses as an observable variable to avoid mutations down the line
  //[about observables](https://angular.io/guide/observables)
  courses$ : Observable<Course[]>;

  //initialize courses as undefined - used in the get method using the subscribe
  // courses;

  constructor(private http: HttpClient) {

  }

  //lifecycle hook, will use the http method declared inside the constructor
  //the HTTP call is an AJAX call
  ngOnInit() {

    //the HttpParams class is immutable - to change the params we need to use .set
    //the set method will request the first page with the first 10 results on that page to be returned
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    //the return value of this call is being used in the template with the async pipe
    this.courses$ = this.http.get<Course[]>('/api/courses', {params});

    //subscribe is the success handler - not needed when using observables
    // this.http.get('/api/courses', {params})
    //   .subscribe(
    //     //asign the http request results to the undefined courses
    //     courses => this.courses = courses
    //   );
  }



}
