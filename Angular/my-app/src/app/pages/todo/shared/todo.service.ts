import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, from, map, tap } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private todoPath = 'todos';

  todotSubject$ = new Subject<string[]>();

  // getTodo$ = this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/'));

  // promise = new Promise(res => {
  //   console.log('hello');
  // })

  constructor(private http: HttpClient) {}

  // [[], [], []] Array<Array<T>> ==> Array<T>
  // Observable<observable<T>> ===> Observabel<T>
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/')).pipe(
      tap((todos: Todo[]) => {
        this.todotSubject$.next(
          todos.reduce((acc, cur) => {
            return [...acc, cur.title];
          }, [] as string[])
        );
      })
      // map((todos: Todo[]) => {
      //   return todos.reduce((acc, cur) => {
      //     return [...acc, cur.title];
      //   }, [] as string[]);
      // })
    );
  }
}
