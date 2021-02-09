import { Component } from '@angular/core';
import {COURSES} from '../db-data';

import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  //passing the selected course as a parameter to the custom event handler
  onCourseSelected(course:Course) {
    console.log('app component - event selected', course);
  };

}
