import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  fromEvent,
  interval,
  mergeMap,
  of,
  switchMap,
  takeUntil,
  tap,
  throttle,
  throttleTime,
} from 'rxjs';
import { BookSearchService } from '../shared/book-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  private notifier = new Subject();
  @ViewChild('inputBox', { static: true }) inputBox!: ElementRef;

  constructor(private bookService: BookSearchService) {}

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(this.inputBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        // throttleTime(500),
        mergeMap((e) => {
          const bookname = this.inputBox.nativeElement.value;
          // if (e.key === 'Enter') {
          return this.bookService.getBooks(bookname);
          // }
          // return of([]);
        }),
        takeUntil(this.notifier)
      )
      .subscribe();

    interval(1000).pipe(takeUntil(this.notifier)).subscribe(console.log);
  }

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {
    this.stopObs();
  }

  stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
