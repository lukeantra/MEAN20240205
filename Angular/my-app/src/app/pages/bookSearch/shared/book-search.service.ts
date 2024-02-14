import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Book, BookItem, BookSearchRes } from './book.interface';

@Injectable()
export class BookSearchService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  bookList$ = new Subject<BookItem[]>();
  // wishlist: BookItem[] = [];
  // wishList$ = new Subject<BookItem[]>();
  wishList$ = new BehaviorSubject<BookItem[]>([]);

  get wishList() {
    return this.wishList$.value;
  }

  constructor(private http: HttpClient) {}

  getBooks(bookname: string): Observable<BookSearchRes> {
    if (bookname.trim() === '') throw new Error();

    return this.http.get<BookSearchRes>(this.baseUrl + bookname).pipe(
      tap(({ totalItems, items }) => {
        if (totalItems === 0) this.bookList$.next([]);

        const arr = items.map(
          ({ volumeInfo }: Book): BookItem => ({
            img:
              (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) || '',
            title: volumeInfo.title || '',
            publisher: volumeInfo.publisher || '',
            date: volumeInfo.publishedDate || '',
            description: volumeInfo.description || '',
          })
        );
        this.bookList$.next(arr);
      })
    );
  }

  addToWishList(bookitem: BookItem) {
    if (this.wishList.find((e) => e.title === bookitem.title)) return;
    // this.wishlist.push(bookitem);
    // this.wishList$.next(this.wishlist);
    this.wishList$.next([...this.wishList, bookitem]);
  }
  deleteFromWishes(bookitem: BookItem) {
    this.wishList$.next(
      this.wishList.filter((e) => e.title !== bookitem.title)
    );
  }
}
