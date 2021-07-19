import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoServiceService) { }


  ngOnInit(): void {

    this.todoService.findAll().subscribe(response => {

      this.todos = response;

    });

  }

}
