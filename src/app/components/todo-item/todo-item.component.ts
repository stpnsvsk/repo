import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../../providers/todo.states';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo? :TodoModel;

newitem?:string;
  constructor(private store:Store){}
  ngOnInit(): void {
   
   this.newitem= this.todo!.title;
  }
  updateToggle(){
     
  }

  deleteToDo(){
    this.store.dispatch(actions.deleteTodoAction({
      id:this.todo!.id, title: this.newitem!
          }))

  }
}
