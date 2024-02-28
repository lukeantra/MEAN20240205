import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  // val;
  todos$!: Observable<Todo[]>;
  sbp = new Subscription();
  name = 'hello';
  isDisable = true;

  // lifecycle;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todotSubject$;
    this.sbp = this.todoService.getTodos().subscribe();
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  // // method;
  toggle() {
    this.name = 'world';
    this.isDisable = !this.isDisable;
  }

  delectTodo(id: number) {
    console.log(id);
    this.todoService.delectTodo(id);
  }
}
