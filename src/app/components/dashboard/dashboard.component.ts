import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { catchError, share } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];
  response: Response;

  todo: string = '';
  constructor(private todoService: TodoServiceService) { }


  ngOnInit(): void {

    this.todoService.findAll().subscribe((response) => {

      this.response = response;

      if (this.response.statusCode === 200) {
        this.todos = response['data'];
      } else {
        console.log('InCorrect Status Code')
      }
    });

  }

  getTodoById(todoId: string) {

    this.todo = todoId;
    console.log(this.todo);

  }

}
