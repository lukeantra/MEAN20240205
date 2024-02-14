import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  // @Input('item') todo!: Todo;
  // @Output() emitter = new EventEmitter();

  constructor(private todoService: TodoService) {
    // console.log('from constructor: ', this.todo);
  }
  ngOnInit() {
    this.todoService.todotSubject$.subscribe((data) =>
      console.log('from todo item: ', data)
    );
    // console.log('from onInit: ', this.todo);
  }

  emitTodoId() {
    // this.emitter.emit(this.todo.id);
  }
}
