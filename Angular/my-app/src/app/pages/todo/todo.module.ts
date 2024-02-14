import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  exports: [TodoComponent],
  imports: [CommonModule, SharedModule],
})
export class TodoModule {}
