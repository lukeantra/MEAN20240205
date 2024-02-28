import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'todolist';

  constructor(private router: Router) {}

  navigateTo(to: string) {
    this.router.navigate([to]);
  }
}
// [baseUrl, 'todos', id].join('/')
