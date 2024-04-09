import { addTodo } from './../../../../todo-app/src/app/state/todo.actions';
import { createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { actions } from './todo.actions';
import { TodoModel, todos } from './todo.states';


export const todoReducer = createReducer(
    todos,on(actions.addTodoAction,(state,todo)=>{
        return [...state, todo];
    }),
    on(actions.updateTodoAction,(state,todo)=>{
       let tempTodoIndex = state.findIndex((t)=>t.id ==todo.id);
       if(tempTodoIndex !=-1){
        state[tempTodoIndex]=todo;
       }
       return [...state];
    }),
    on(actions.deleteTodoAction,(state,todo)=>{
      let todos=   state.filter((t)=>t.id !=todo.id)
        return [... todos];
    }),
);

export const todoSelector = createSelector(createFeatureSelector("todos"),(todos:TodoModel[])=>todos);