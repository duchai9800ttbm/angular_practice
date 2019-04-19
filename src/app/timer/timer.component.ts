import { Component, OnInit, forwardRef, OnChanges } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeComponent } from './time/time.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnChanges {

  date: number;
  value;
  form = new FormGroup({
    datetime: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.date = Number(Date.now());
    this.form.get('datetime').setValue(this.date);
  }

  ngOnChanges() {
    console.log(this.form);
  }
}
