import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../shared/todo.interface';

export const todoState = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  todoState,
  (state: TodoState) => state.todolist
);
