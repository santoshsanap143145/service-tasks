import { Injectable, OnInit } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  todoArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '101',
    },
    {
      todoItem: 'CSS',
      todoId: '102',
    },
    {
      todoItem: 'JS',
      todoId: '103',
    },
    {
      todoItem: 'SASS',
      todoId: '104',
    },
  ];

  constructor(private _snackBar : SnackBarService) {}

  ngOnInit(): void {}

  fetchAlltodos(): Array<Itodo> {
    return this.todoArr;
  }

  createTodo(newTodo: Itodo) {
    this.todoArr.push(newTodo);
    this._snackBar.notify(`New Todo '${newTodo.todoItem}' is created Successfully !!!`)
  }

  patchtodo(id: string) {
    return this.todoArr.find((todo) => todo.todoId === id);
  }

  updateTodo(updatedTodo: Itodo) {
    let getIndex = this.todoArr.findIndex(todo => todo.todoId === updatedTodo.todoId)
    this.todoArr[getIndex] = updatedTodo
    this._snackBar.notify(`The Todo is updated to '${updatedTodo.todoItem}' Successfully !!!`)
  }

  removeTodo(id: string){
    let getIndex = this.todoArr.findIndex(todo => todo.todoId === id)
    const removeTodoItem = this.todoArr[getIndex].todoItem
    this.todoArr.splice(getIndex, 1)
    this._snackBar.notify(`The Todo ${removeTodoItem} is removed Successfully !!!`)
  }
}
