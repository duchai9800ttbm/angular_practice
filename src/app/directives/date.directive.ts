import { Directive, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input('appDate') value;
// tslint:disable-next-line: no-output-rename
  @Output('appDateChange') change = new EventEmitter();

  constructor() { }

  @HostListener('keyup', ['$event']) onkeydown(event: KeyboardEvent) {
    this.change.emit(this.value.currentValue);
  }
}
