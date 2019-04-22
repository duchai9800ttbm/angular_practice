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
  dateDefault = new Date(0, 0, 0, 0, 0, 0);
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    console.log(fn);
    this.onChange = fn;
  }

  writeValue(value) {
    console.log(value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
    console.log(fn);
  }


  constructor(private cc: ControlContainer) { }

  ngOnInit() {
    // this.display(this.cc.control.get('datetime').value);
  }

  private display(datetime) {
    this.d = new Date(datetime);
    this.form1.setValue({
      date: new Date(datetime),
      time: new Date(datetime)
    });

    console.log(this.form1.get('date').value);
    // const day = this.d.getDate();
    // const month = this.d.getMonth();
    // const year = this.d.getFullYear();
    // const hour = this.d.getHours();
    // const minute = this.d.getMinutes();

    // console.log(day);

    // console.log(`${year}-${this.formatDigit(month)}-${this.formatDigit(day)}`);

    // this.form1.setValue({
    //   date: `${year}-${this.formatDigit(month)}-${this.formatDigit(day)}`,
    //   time: `${this.formatDigit(hour)}:${this.formatDigit(minute)}`
    // });
  }

  private formatDigit(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  onValueChange() {
    const time: Date = this.form1.get('time').value;
    const date: Date = this.form1.get('date').value;
    console.log(date);

    if (time) {
      date.setHours(time.getHours());
      date.setMinutes(time.getMinutes());
      date.setSeconds(time.getSeconds());
    }

    this.cc.control.get(this.formControlName).setValue(Number(date));
    this.display(Number(date));
  }

  onInputChange() {
    const date: Date = this.form1.get('date').value;
    console.log(date);

    this.cc.control.get(this.formControlName).setValue(Number(date));
    // console.log(date.getHours());
  }

  show(isOpen) {
    // const time = this.form1.get('time').value;
    // const date = this.form1.get('date').value;
    // console.log(date);
    // console.log(time);
    // if (time && date) {
    //   const d = new Date(`${this.form1.get('date').value} ${this.form1.get('time').value}`);
    //   this.cc.control.get(this.formControlName).setValue(Number(d));
    // }

    console.log(isOpen);
  }

  onFocus() {
    // if (this.form1.get('date').value === '') {
    //   this.form1.get('date').setValue(this.dateDefault);
    // }
  }

  onBlur() {
    console.log(this.form1.get('date').value);
    if (!this.form1.get('date').value) {
      this.form1.get('date').setValue('');
    }
  }

  dateChange(date: string) {
    const d = date.split(' ')[0].split('-').map(value => Number(value));
    if (1970 <= d[2] && d[2] <= 3000 && !isNaN(d[1]) && !isNaN(d[2])) {
      const da: Date = new  Date(d[2], d[1] - 1, d[0]);
      this.display(Number(da));
    }
  }
}
