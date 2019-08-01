import { Directive, Input, EventEmitter, ElementRef, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollCheck]'
})
export class ScrollCheckDirective {

  @Input('appScrollCheck') detectType: string;

  @Output() scrollchange = new EventEmitter();

  constructor(private eleRef: ElementRef) { }
  @HostListener('scroll') onScroll() {
    console.log('scrolling');
    const ele = this.eleRef.nativeElement as HTMLTableElement;

    const eleScroll = ele.scrollTop;
    const height = ele.scrollHeight - ele.clientHeight;
    const scrolled = (eleScroll / height) * 100;
    // console.log(scrolled);

    this.scrollchange.emit({
      percentage: Math.round(scrolled)
    });
  }
}
