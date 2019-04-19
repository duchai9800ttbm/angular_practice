import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string; value: string; selected: string}[] = [];
  editor = false;

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line: no-string-literal
    this.options = options['options'] || [];
    // tslint:disable-next-line: no-string-literal
    this.api = options['api'];
    // tslint:disable-next-line: no-string-literal
    this.editor = options['editor'] || false;
    // tslint:disable-next-line: no-string-literal
    this.pair = options['pair'] || null;
  }
}
