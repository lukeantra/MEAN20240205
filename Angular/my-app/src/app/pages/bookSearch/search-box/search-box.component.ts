import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { Subscription, fromEvent, of, switchMap, tap } from 'rxjs';
import { BookSearchService } from '../shared/book-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  private subscription = new Subscription();
  @ViewChild('inputBox', { static: true }) inputBox!: ElementRef;

  constructor(private bookService: BookSearchService) {}

  ngOnInit(): void {
    this.subscription = fromEvent<KeyboardEvent>(
      this.inputBox.nativeElement,
      'keyup'
    )
      .pipe(
        switchMap((e) => {
          const bookname = this.inputBox.nativeElement.value;
          if (e.key === 'Enter') {
            return this.bookService.getBooks(bookname);
          }
          return of([]);
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
