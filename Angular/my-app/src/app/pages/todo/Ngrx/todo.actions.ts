import { createAction, props } from '@ngrx/store';
import { Todo } from '../shared/todo.interface';

export const initTodoList = createAction('[Todos] init todolist');

// * ~~~~~~~~~~~~~~ load todos ~~~~~~~~~~~~~~
export const loadTodoList = createAction('[Todos] load todolist');

export const loadSuccess = createAction(
  '[Todos] load success',
  props<{ todos: Todo[] }>()
);

export const loadFailure = createAction(
  '[Todos] load failed',
  props<{ err: string }>()
);

// * ~~~~~~~~~~~~~~ delete todo ~~~~~~~~~~~~~~
export const delectTodo = createAction(
  '[Todos] delete todo',
  props<{ id: number }>()
);
