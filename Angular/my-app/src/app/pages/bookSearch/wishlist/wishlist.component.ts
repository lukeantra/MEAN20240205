import { Component } from '@angular/core';
import { BookSearchService } from '../shared/book-search.service';
import { BookItem } from '../shared/book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  constructor(public bookService: BookSearchService) {}

  deleteFromWishes(bookitem: BookItem) {
    this.bookService.deleteFromWishes(bookitem);
  }
}
