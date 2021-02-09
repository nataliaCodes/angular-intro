import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Course} from '../model/course';

@Injectable({
  providedIn: 'root'
})

//the purpose for this custom service is to make the http call data available in multiple parts of the application without having to do multiple calls
export class CoursesService {

    //the http client is provided to the class via the contsructor
  constructor(private http: HttpClient) {

   }

   loadCourses(): Observable<Course[]> {

    //the HttpParams class is immutable - to change the params we need to use .set
    //the set method will request the first page with the first 10 results on that page to be returned
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    return this.http.get<Course[]>('/api/courses', {params});

   }

   //the method is called from the application component
   saveCourse(course:Course) {

      //sets custom haders if we need to authenticate the user
      const headers = new HttpHeaders()
        .set("X-Auth", "userId");

      return this.http.put(`/api/courses/${course.id}`, course, {headers});
   }
}
