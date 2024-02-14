import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  private subscription = new Subscription();
  @ViewChild('inputBox') inputBox!: ElementRef;

  ngAfterViewInit(): void {
    this.subscription = fromEvent(
      this.inputBox.nativeElement,
      'keyup'
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
