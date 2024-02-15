import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[customDirDemo]',
})
export class CustomDirectiveDirective {
  @Input() highlightColor!: string;
  @Input() defaultColor!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['highlightColor']);
  }
  ngOnInit() {
    console.log(this.highlightColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor =
      this.highlightColor || this.defaultColor;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
}
