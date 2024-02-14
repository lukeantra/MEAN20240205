import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo/todo.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './pages/todo/shared/todo.service';
import { BookSearchModule } from './pages/bookSearch/book-search.module';
import { TodoModule } from './pages/todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BookSearchModule,
    TodoModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [TodoService],
})
export class AppModule {}
