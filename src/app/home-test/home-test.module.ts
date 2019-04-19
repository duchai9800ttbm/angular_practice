import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeTestRoutingModule } from './home-test-routing.module';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';
import { CheckNullPipe } from '../pipe/check-null.pipe';
import { ProspectStatusPipe } from '../pipe/prospect-status.pipe';
import { FormComponent } from './prospect/form/form.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from '../dynamic-form/dynamic-input/dynamic-input.component';
import { FormEditComponent } from './prospect/form-edit/form-edit.component';
import { CurrencyDirective } from '../directives/currency.directive';

@NgModule({
  declarations: [
    HomeTestComponent,
    ProspectComponent,
    CheckNullPipe,
    ProspectStatusPipe,
    FormComponent,
    DynamicFormComponent,
    DynamicInputComponent,
    FormEditComponent,
    CurrencyDirective
  ],
  imports: [
    CommonModule,
    HomeTestRoutingModule,
    MDBBootstrapModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class HomeTestModule { }
