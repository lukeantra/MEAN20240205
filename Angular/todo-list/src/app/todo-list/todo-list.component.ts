import { Component } from '@angular/core';
import { Todo } from '../service/todo.interface';
import { Observable, Subscription } from 'rxjs';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  // val;
  todos$!: Observable<Todo[]>;
  sbp = new Subscription();
  title = '';
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
    console.log(id);
    this.todoService.delectTodo(id).subscribe();
  }
}
