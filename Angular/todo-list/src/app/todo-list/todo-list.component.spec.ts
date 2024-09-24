import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { baseUrl } from '../app.module';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-todo-item',
  template: `<div>{{ todo.title }}</div>`,
})
class TestTodoItemComponent {
  @Input() todo = {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  };
  @Output() idemiter = new EventEmitter();
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, TestTodoItemComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        TodoService,
        {
          provide: baseUrl,
          useValue: 'https://jsonplaceholder.typicode.com',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
