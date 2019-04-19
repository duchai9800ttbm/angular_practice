import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormGroup, FormControl, ControlContainer, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeComponent),
      multi: true
    }
  ]
})
export class TimeComponent implements OnInit, ControlValueAccessor {

  @Input() formControlName;
  d: Date;
  // @Output('dateChange') e = new EventEmitter();
  form1 = new FormGroup({
    date: new FormControl(''),
    time: new FormControl('')
  });
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    console.log(fn);
    this.onChange = fn;
  }

  writeValue(value) {
    console.log(value);
    this.display(value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
    console.log(fn);
  }


  constructor(private cc: ControlContainer) { }

  ngOnInit() {
    this.display(this.cc.control.get('datetime').value);
  }

  private display(datetime) {
    this.d = new Date(datetime);
    const day = this.d.getDate();
    const month = this.d.getMonth();
    const year = this.d.getFullYear();
    const hour = this.d.getHours();
    const minute = this.d.getMinutes();

    console.log(day);

    console.log(`${year}-${this.formatDigit(month)}-${this.formatDigit(day)}`);

    this.form1.setValue({
      date: `${year}-${this.formatDigit(month)}-${this.formatDigit(day)}`,
      time: `${this.formatDigit(hour)}:${this.formatDigit(minute)}`
    });
  }

  private formatDigit(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  show() {
    const time = this.form1.get('time').value;
    const date = this.form1.get('date').value;
    console.log(date);
    console.log(time);
    if (time && date) {
      const d = new Date(`${this.form1.get('date').value} ${this.form1.get('time').value}`);
      this.cc.control.get(this.formControlName).setValue(Number(d));
    }
  }
}
