import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../shared/todo.interface';

@Injectable()
export class TodoEffects {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private todoPath = 'todos';

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodoList),
      exhaustMap(() =>
        this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/'))
      ),
      map((todos) => TodoActions.loadSuccess({ todos })),
      catchError((error) =>
        of(TodoActions.loadFailure({ err: JSON.stringify(error) }))
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
