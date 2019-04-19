import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @ViewChild(DynamicFormComponent)
  private dynamicForm: DynamicFormComponent;

  show = true;

  constructor() { }

  ngOnInit() {
  }

  showData() {
    console.log(this.dynamicForm.showData());
  }

  canDeactivate() {
    if (this.dynamicForm.checkChange()) {
      return window.confirm('Discard changes?');
    }

    return true;
  }
}
