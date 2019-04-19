import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  el: ElementRef;
  private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/);
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];

  @Input('appCurrency') value: string;
  // tslint:disable-next-line: no-output-rename
  @Output('appCurrencyChange') change = new EventEmitter();

  constructor(el: ElementRef) {
    this.el = el;
    this.change.emit('0 VNĐ');
  }

  @HostListener('focus') onMouseLeave() {
    this.value = this.value.replace(' VNĐ', '');
    this.change.emit(this.value);
  }

  @HostListener('blur') onMouseEnter() {
    if (this.value) {
      this.change.emit(this.value + ' VNĐ');
    } else {
      this.change.emit('0 VNĐ');
    }
  }

  @HostListener('keydown', ['$event']) onkeydown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    console.log(event.key);
    // if (next.lastIndexOf('-') > 0) {
    //   console.log('ok');
    //   event.preventDefault();
    // }
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
