import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  todoId: string;

  todo: Todo = new Todo();

  form = new FormGroup({

    todoName: new FormControl('', [Validators.required, Validators.minLength(4)]),

    dueDate: new FormControl('', [Validators.required])

  });


  constructor(private route: ActivatedRoute, private todoService: TodoServiceService) { }

  ngOnInit(): void {

    this.getTodoIdFromParams();

    this.getTodoFromBackend(this.todoId);

  }

  getTodoIdFromParams() {

    this.route.params.subscribe((params: Params) => {
      this.todoId = params['todoId'];
    })
  }

  getTodoFromBackend(todoId: string) {

    this.todoService.findById(todoId).subscribe(response => {

      this.todo = response;

      this.form.patchValue({

        todoName: this.todo.todoName,
        dueDate: this.todo.dueDate
      });

    })
  }






}
