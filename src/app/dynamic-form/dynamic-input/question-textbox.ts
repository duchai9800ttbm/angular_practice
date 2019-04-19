import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  placeholder: string;
  directive: boolean;

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line: no-string-literal
    this.type = options['type'] || '';
    // tslint:disable-next-line: no-string-literal
    this.placeholder = options['placeholder'] || '';
    // tslint:disable-next-line: no-string-literal
    this.directive = options['directive'] || false;
    console.log(this.value);
  }
}
