import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './dynamic-input/question-base';
import { DropdownQuestion } from './dynamic-input/question-dropdown';
import { TextboxQuestion } from './dynamic-input/question-textbox';
import { QuestionControlService } from './dynamic-input/question-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup;
  questions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextboxQuestion({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    }),

    new DropdownQuestion({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),
  ];

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

}
