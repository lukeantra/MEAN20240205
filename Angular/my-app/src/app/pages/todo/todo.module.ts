import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule, SharedModule],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
