import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTestRoutingModule } from './home-test-routing.module';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';
import { CheckNullPipe } from '../pipe/check-null.pipe';

@NgModule({
  declarations: [
    HomeTestComponent,
    ProspectComponent,
    CheckNullPipe
  ],
  imports: [
    CommonModule,
    HomeTestRoutingModule
  ]
})
export class HomeTestModule { }
