import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../shared/todo.interface';
import * as TodoActions from './todo.actions';

const todoState: TodoState = {
  todolist: [],
  err: '',
};
export const todoReducer = createReducer(
  todoState,
  on(TodoActions.initTodoList, (state) => {
    return state;
  }),
  on(TodoActions.delectTodo, (state, { id }) => {
    const todolist = state.todolist.filter((todo) => {
      if (todo.id) return +todo.id !== +id;
      else return false;
    });
    return {
      ...state,
      todolist,
    };
  }),
  on(TodoActions.loadSuccess, (state, { todos }) => {
    return { ...state, todolist: todos };
  }),
  on(TodoActions.loadFailure, (state, { err }) => {
    return { ...state, todolist: [], err };
  })
);
