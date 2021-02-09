import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';

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

  //the custom coursesService is injected into the class through the contructor
  //connects to the custom service inside courses.service.ts, which is an http call
  constructor(private coursesService: CoursesService) {

  }

  //lifecycle hook, will use the http method declared inside the constructor
  //the HTTP call is an AJAX call
  ngOnInit() {

    //the return value of this call is being used in the template with the async pipe
    //if we need this data to be available within multiple layers the call can be made through a custom service
    this.courses$ = this.coursesService.loadCourses();

    //subscribe is the success handler - not needed when using observables
    // this.http.get('/api/courses', {params})
    //   .subscribe(
    //     //asign the http request results to the undefined courses
    //     courses => this.courses = courses
    //   );
  }



}
