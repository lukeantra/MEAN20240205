import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // template: ` <h1>Hello</h1> `,
  styleUrl: './todo.component.scss',
  // styles: []
})
export class TodoComponent implements OnInit {
  // val;
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  context = 'hello angular';
  todos: Todo[] = [];

  // lifecycle;
  constructor() {}

  ngOnInit(): void {
    fetch(this.baseUrl)
      .then((data) => data.json())
      .then((todos) => {
        this.todos = todos;
      });
  }
  ngOnDestroy(): void {}

  // method;
  toggle() {
    this.todos[0].completed = !this.todos[0].completed;
  }

  getTodoId(id: number) {
    console.log('from todo item component: ', id);
  }
}
