import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';
import { FormComponent } from './prospect/form/form.component';

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
        component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTestRoutingModule { }
