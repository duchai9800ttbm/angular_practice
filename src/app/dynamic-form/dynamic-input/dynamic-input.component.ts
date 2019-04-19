import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  listOptions = [];
  pair;

  constructor(private data: DataService) { }

  ngOnInit() {
    if (this.question.api) {
      // tslint:disable-next-line: no-string-literal
      this.data.getDataForCheckbox(this.question.api).subscribe(data => this.listOptions = data.result);
      this.pair = this.question.pair;
      // console.log(this.pair);
    }
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
