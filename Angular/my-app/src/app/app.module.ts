import { NgModule, isDevMode } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { TodoComponent } from './pages/todo/todo/todo.component';
import { BooklistComponent } from './pages/bookSearch/booklist/booklist.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import { todoReducer } from './pages/todo/Ngrx/todo.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './pages/todo/Ngrx/todo.effects';

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
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({ name: 'TodoNgrx Demo' }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}

// {
//   todos: {
//     todolist: [
//       {id, coompleted, userId..}
//     ],
//     err: 'error'
//   },
//   products: {

//   },
//   ...
// }
