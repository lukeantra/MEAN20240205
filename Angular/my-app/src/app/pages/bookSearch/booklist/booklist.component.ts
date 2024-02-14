import { Component } from '@angular/core';
import { BookSearchService } from '../shared/book-search.service';
import { BookItem } from '../shared/book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss',
})
export class BooklistComponent {
  showbooks = true;
  showwishes = false;
  bookList: BookItem[] = [];

  constructor(private bookService: BookSearchService) {}

  ngOnInit(): void {
    this.bookService.bookList$.subscribe((books) => {
      console.log(books);
      this.bookList = books;
    });
  }

  addCard(book: BookItem) {
    this.bookService.addToWishList(book);
  }
}
