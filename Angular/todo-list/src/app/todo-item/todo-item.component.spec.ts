import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { Component } from '@angular/core';

const testTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

@Component({
  selector: 'todolist',
  template: ` <app-todo-item [item]="item"></app-todo-item>`,
})
class TestComponent {
  item = { ...testTodo };
}

fdescribe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let itemcomponent: TodoItemComponent;
  let parentfixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    parentfixture = TestBed.createComponent(TestComponent);
    itemcomponent = parentfixture.debugElement.children[0].componentInstance;
    parentfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from the parent', () => {
    expect(itemcomponent.todo).toEqual(testTodo);
  });
});
