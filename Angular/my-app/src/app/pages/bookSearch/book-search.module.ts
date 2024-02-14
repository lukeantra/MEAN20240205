import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookSearchService } from './shared/book-search.service';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookCardComponent,
    BooklistComponent,
    SearchBoxComponent,
    WishlistComponent,
  ],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: [BookSearchService],
  exports: [BooklistComponent],
})
export class BookSearchModule {}
