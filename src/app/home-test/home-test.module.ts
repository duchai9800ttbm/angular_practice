import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeTestRoutingModule } from './home-test-routing.module';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';
import { CheckNullPipe } from '../pipe/check-null.pipe';
import { ProspectStatusPipe } from '../pipe/prospect-status.pipe';
import { FormComponent } from './prospect/form/form.component';

@NgModule({
  declarations: [
    HomeTestComponent,
    ProspectComponent,
    CheckNullPipe,
    ProspectStatusPipe,
    FormComponent,
  ],
  imports: [
    CommonModule,
    HomeTestRoutingModule,
    MDBBootstrapModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPaginationModule
  ]
})
export class HomeTestModule { }
