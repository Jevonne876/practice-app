import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];

  todo: string = '';

  constructor(private todoService: TodoServiceService) { }


  ngOnInit(): void {

    this.todoService.findAll().subscribe(response => {
      this.todos = response;
      share();
    });

  }

  getTodoById(todoId: string) {

    this.todo = todoId;
    console.log(this.todo);

  }

}
