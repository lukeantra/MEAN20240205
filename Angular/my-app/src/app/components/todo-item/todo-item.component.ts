import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() emitter = new EventEmitter();

  constructor() {
    console.log('from constructor: ', this.todo);
  }
  ngOnInit() {
    console.log('from onInit: ', this.todo);
  }

  emitTodoId() {
    this.emitter.emit(this.todo.id);
  }
}
