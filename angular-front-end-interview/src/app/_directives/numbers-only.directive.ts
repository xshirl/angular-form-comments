import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  maxLength: number = 5;
  constructor(private el: ElementRef, private ngControl: NgControl) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event:any) {
    const element = this.el.nativeElement;
    if (element.value.length >= this.maxLength) {
      if (event.which !== 8 && event.which !== 9 && event.which !== 46)
        event.preventDefault();
    }
  }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}

