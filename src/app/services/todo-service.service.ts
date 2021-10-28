import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Response } from '../models/response';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Response> {

    return this.http.get<Response>("http://localhost:8080/api/v1/get/todos");
  }

  public findById(todoId: string): Observable<Todo> {

    return this.http.get<Todo>("http://localhost:8080/api/v1/get/todo/" + todoId);
  }


}
