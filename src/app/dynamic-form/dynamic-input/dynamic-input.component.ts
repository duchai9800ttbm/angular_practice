import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    // console.log(this.form);
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
