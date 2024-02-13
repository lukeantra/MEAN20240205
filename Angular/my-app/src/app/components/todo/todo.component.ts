import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // template: ` <h1>Hello</h1> `,
  styleUrl: './todo.component.scss',
  // styles: []
})
export class TodoComponent implements OnInit {
  // val;
  todos$!: Observable<string[]>;

  // lifecycle;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todotSubject$;
    this.todoService.getTodos().subscribe();
  }
  ngOnDestroy(): void {
    // this.sbp.unsubscribe();
  }

  // // method;
  // toggle() {
  //   this.todos[0].completed = !this.todos[0].completed;
  // }

  getTodoId(id: number) {
    console.log('from todo item component: ', id);
  }
}
