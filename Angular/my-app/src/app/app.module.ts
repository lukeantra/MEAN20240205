import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookSearchModule } from './pages/bookSearch/book-search.module';
import { TodoModule } from './pages/todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { PlayGroundModule } from './pages/play-ground/play-ground.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Router, RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './pages/todo/todo/todo.component';
import { BooklistComponent } from './pages/bookSearch/booklist/booklist.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';

const routers: Routes = [
  { path: 'todolist', component: TodoComponent },
  { path: 'todoitem', component: TodoItemComponent },
  { path: 'booklist', component: BooklistComponent },

  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: '**', component: BooklistComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,

    BookSearchModule,
    TodoModule,
    PlayGroundModule,

    RouterModule.forRoot(routers),
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
