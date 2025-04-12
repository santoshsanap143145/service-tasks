import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') todoForm !: NgForm

  @Input() objId !: string
  editMode: boolean = false
  editTodo !: Itodo
  constructor(private _uuidService : UuidService, private _todoService: TodoService) { }

  ngOnInit(): void {
  }

  submitTodo(){
    let newTodo: Itodo = this.todoForm.value
    newTodo.todoId = this._uuidService.uuid()
    this._todoService.createTodo(newTodo)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['objId']){
      setTimeout(() => {
        if(this.todoForm && this.objId){
          this.editTodo = this._todoService.patchtodo(this.objId)!
          this.todoForm.setValue({
            todoItem: this.editTodo.todoItem
          })
          this.editMode = true
        }
      }, 50);
    }
  }

  updateOnClick(){
    let updatedTodo = this.todoForm.value
    updatedTodo.todoId = this.editTodo.todoId
    this._todoService.updateTodo(updatedTodo)
  }
}
