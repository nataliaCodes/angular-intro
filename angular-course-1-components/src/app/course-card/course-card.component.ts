import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import {Course} from '../model/course';

@Component({
  // the selector gives us the ability to create a custom html-tag
  selector: 'course-card',
  //points to the template file defining the component
  templateUrl: './course-card.component.html',
  //loads the css file
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  //defines a new custom event handler using the Angular core EventEmitter
  //<Course> shows what type of values are being emmited
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  //click event handler defined inside the card html
  onCourseViewed() {
    console.log('card component - button clicked');

    //the emitter passes the selected course as an argument
    this.courseSelected.emit(this.course);
  }

}
