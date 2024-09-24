import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

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
