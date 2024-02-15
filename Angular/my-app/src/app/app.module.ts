import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
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
})
export class AppModule {}
