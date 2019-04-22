import { Component, OnInit, forwardRef, OnChanges } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, FormArray, FormBuilder, FormGroupName } from '@angular/forms';
import { TimeComponent } from './time/time.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnChanges {

  date: number;
  value;
  items: FormArray;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      datetime: '',
      items: this.fb.array([ this.createItems() ])
    });
    this.date = Number(Date.now());
    this.form.get('datetime').setValue(this.date);
  }

  ngOnChanges() {
    console.log(this.form);
  }

  private createItems(): FormGroup {
    return this.fb.group({
      name: ''
    });
  }

  addItem() {
    (this.form.get('items') as FormArray).push(this.createItems());
  }

  delItem(index) {
    (this.form.get('items') as FormArray).removeAt(index);
  }
}
