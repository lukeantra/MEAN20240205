import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('inputBox') inputBox!: ElementRef;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
