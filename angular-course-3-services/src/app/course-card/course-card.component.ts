import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    //creates a copy of the course
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    //detects change on a course card
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor() {

    }

    ngOnInit() {

    }

    //the argument data is passed from the template level
    onSaveClicked(description:string) {

        //spreads the existing course object then changes the description according to the user input coming from the template
        this.courseEmitter.emit({...this.course, description});

    }




}
