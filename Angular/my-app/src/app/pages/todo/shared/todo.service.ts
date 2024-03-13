import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, map, tap } from 'rxjs';
import { Todo } from './todo.interface';
import { baseUrl } from '../todo.module';

@Injectable()
export class TodoService {
  private todoPath = 'todos';
  todotSubject$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private http: HttpClient,
    @Inject(baseUrl) private baseUrl: string
  ) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/')).pipe(
      tap((todos: Todo[]) => {
        this.todotSubject$.next(todos.reverse());
      })
    );
  }
  addTodo(todo: Todo) {
    return this.http
      .post<Todo>([this.baseUrl, this.todoPath].join('/'), todo)
      .pipe(
        tap((todo: Todo) => {
          this.todotSubject$.next([todo, ...this.todotSubject$.value]);
        })
      );
  }
  delectTodo(id: number) {
    const arr = this.todotSubject$.value.filter((e) => {
      if (e.id) return +e.id !== +id;
      else return false;
    });
    this.todotSubject$.next(arr);

    return this.http.delete([this.baseUrl, this.todoPath, id].join('/'));
  }
}
