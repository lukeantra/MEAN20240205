import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  from,
  fromEvent,
  interval,
  of,
} from 'rxjs';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox') inputbox!: ElementRef;
  title = 'my-app';
  name = '';
  private subsription = new Subscription();
  // private todoService = inject(TodoService);

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // const observable = new Observable((observer) => {
    //   observer.next(Math.round(Math.random() * 10));
    // });
    // observable.subscribe((e) => console.log('sufscriber1: ', e));
    // observable.subscribe((e) => console.log('subscriber2: ', e));
    // const subject = new Subject();
    // subject.subscribe((e) => console.log('subject1: ', e));
    // subject.subscribe((e) => console.log('subject2: ', e));
    // subject.next(Math.round(Math.random() * 10));
    // subject.subscribe((e) => console.log('subject3: ', e));
    // subject.next(Math.round(Math.random() * 10));
    // subject.subscribe((e) => console.log('subject4: ', e));
  }
  ngAfterViewInit(): void {
    // fromEvent(this.inputbox.nativeElement, 'keyup').subscribe((e: any) => {
    //   if (e['key'] === 'Enter') {
    //     console.log(this.name);
    //   }
    // });
  }
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }

  enterValue() {
    console.log(this.name);
  }
}
