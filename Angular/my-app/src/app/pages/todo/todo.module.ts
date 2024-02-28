import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TodoService } from './shared/todo.service';

export const baseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    // TodoService,
    { provide: TodoService, useClass: TodoService },
    { provide: baseUrl, useValue: 'https://jsonplaceholder.typicode.com' },
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
