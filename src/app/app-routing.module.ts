import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'home-test',
    loadChildren: './home-test/home-test.module#HomeTestModule',
    canActivate: [GuardService]
  },
  { path: '', redirectTo: 'home-test', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [GuardService]
})
export class AppRoutingModule { }
