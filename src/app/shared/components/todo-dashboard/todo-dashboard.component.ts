import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoId !: string
  constructor() { }

  ngOnInit(): void {
  }

  getId(id : string){
    this.todoId = id
  }

}
