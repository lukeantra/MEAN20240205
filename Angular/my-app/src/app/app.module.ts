import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookSearchModule } from './pages/bookSearch/book-search.module';
import { TodoModule } from './pages/todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { PlayGroundModule } from './pages/play-ground/play-ground.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BookSearchModule,
    TodoModule,
    FormsModule,
    SharedModule,
    PlayGroundModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
