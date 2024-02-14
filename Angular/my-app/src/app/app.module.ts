import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { BookSearchModule } from './pages/bookSearch/book-search.module';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, BookSearchModule],
  bootstrap: [AppComponent],
  providers: [TodoService],
})
export class AppModule {}
