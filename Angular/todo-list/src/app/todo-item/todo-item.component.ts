import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../service/todo.interface';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input('item') todo: Todo = {
    id: 12,
    title: 'hello',
    userId: 34,
    completed: false,
  };
  @Output() emitter = new EventEmitter();

  constructor() {
    // console.log('from constructor: ', this.todo);
  }
  ngOnInit() {
    // this.todoService.todotSubject$.subscribe((data) =>
    //   console.log('from todo item: ', data)
    // );
    console.log('from onInit: ', this.todo);
  }

  emitTodoId() {
    this.emitter.emit(this.todo.id);
  }
}
