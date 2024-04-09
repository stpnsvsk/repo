
import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../providers/todo.states';
import { Store } from '@ngrx/store';
import { todoSelector } from '../../providers/todo.reducer';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent  implements OnInit{
todos:TodoModel[]=[];

constructor(private store:Store){}
ngOnInit(): void {
  this.loadTodos();
}

loadTodos(){
  this.store.select(todoSelector).subscribe((state)=>this.todos = state);
}
}
