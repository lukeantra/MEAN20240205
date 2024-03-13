import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as TodoSelectors from '../Ngrx/todo.selectors';
import * as TodoActions from '../Ngrx/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  // val;
  todos$!: Observable<Todo[]>;
  sbp = new Subscription();
  title = '';
  isDisable = true;

  // lifecycle;
  constructor(private todoService: TodoService, private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(TodoSelectors.getTodoList);
    this.store.dispatch(TodoActions.loadTodoList());

    // this.todos$ = this.todoService.todotSubject$;
    // this.sbp = this.todoService.getTodos().subscribe();
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  // methods;
  addTodo() {
    console.log(this.title);
    const todo: Todo = {
      userId: 3,
      completed: false,
      title: this.title,
    };
    this.todoService.addTodo(todo).subscribe();
    this.title = '';
  }
  delectTodo(id: number) {
    this.store.dispatch(TodoActions.delectTodo({ id }));
    // console.log(id);
    // this.todoService.delectTodo(id).subscribe();
  }
}
