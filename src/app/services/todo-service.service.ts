import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:8080/api/v1/get/todos";

  }

  public findAll(): Observable<Todo[]> {

    return this.http.get<Todo[]>(this.url);
  }


}
