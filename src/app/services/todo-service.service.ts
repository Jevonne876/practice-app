import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Todo[]> {

    return this.http.get<Todo[]>("http://localhost:8080/api/v1/get/todos");
  }

  public findById(todoId: string): Observable<Todo[]> {

    return this.http.get<Todo[]>("http://localhost:8080/api/v1/get/todo/" + todoId);
  }


}
