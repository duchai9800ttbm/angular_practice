import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: {value: string, name: string}[] = [];
  name: string;

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line: no-string-literal
    this.options = options['options'] || [];
    // tslint:disable-next-line: no-string-literal
    this.name = options['name'] || '';
  }
}
