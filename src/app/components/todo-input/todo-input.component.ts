import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todo.actions';
import { TodoModel } from '../../providers/todo.states';
import { todoSelector } from '../../providers/todo.reducer';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent implements OnInit {
  todoInput?: string;
  todos?: TodoModel[];
  id: number=1;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }
  addToDo() {
    if (this.todoInput != '' || this.todoInput != null) {
      this.id++;
      this.store.dispatch(
        actions.addTodoAction({
          id: this.id,
          title: this.todoInput!,
        })
      );
    }
    this.todoInput = '';
  }
}


//id: Math.floor(Math.random() * 100),