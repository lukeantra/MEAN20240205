import { Component } from '@angular/core';
import { BookSearchService } from '../shared/book-search.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  constructor(public bookService: BookSearchService) {}
}
