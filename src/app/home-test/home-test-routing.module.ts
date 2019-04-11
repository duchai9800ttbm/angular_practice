import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTestComponent } from './home-test.component';
import { ProspectComponent } from './prospect/prospect.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTestComponent,
    children: [
      {
        path: 'prospect',
        component: ProspectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTestRoutingModule { }
