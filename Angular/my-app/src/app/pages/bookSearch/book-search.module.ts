import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookSearchService } from './shared/book-search.service';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BooklistComponent,
    SearchBoxComponent,
    WishlistComponent,
  ],
  imports: [CommonModule],
  providers: [BookSearchService],
  exports: [BooklistComponent],
})
export class BookSearchModule {}
