import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr : Array<Itodo> = []

  @Output() emitTodoid : EventEmitter<string> = new EventEmitter<string>()
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAlltodos()
  }


  editOnClick(todoId: string){
  this.emitTodoid.emit(todoId)
  }

  removeOnClick(todoId: string){
    const confirmed = window.confirm('Are you sure you want to delete this todo?');
  if (confirmed) {
    this._todoService.removeTodo(todoId);
  }
  }
  
}
