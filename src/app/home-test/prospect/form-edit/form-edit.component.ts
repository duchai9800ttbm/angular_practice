import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from 'src/app/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  @ViewChild(DynamicFormComponent)
  private dynamicForm: DynamicFormComponent;

  show = true;
  dataModel: Observable<any>;

  constructor(private activeRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.dataModel = this.data.getProspectItem(id);
    this.dynamicForm.setData(this.dataModel);
  }

  showData() {
    console.log(this.dynamicForm.showData());
  }
}
