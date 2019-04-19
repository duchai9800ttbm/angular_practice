import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';
import { FormComponent } from './prospect/form/form.component';
import { FormEditComponent } from './prospect/form-edit/form-edit.component';
import { FormGuardService } from '../services/form-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeTestComponent,
    children: [
      {
        path: 'prospect',
        component: ProspectComponent,
      },
      {
        path: 'prospect/create',
        component: FormComponent,
        canDeactivate: [FormGuardService]
      },
      {
        path: 'prospect/edit/:id',
        component: FormEditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FormGuardService]
})
export class HomeTestRoutingModule { }
