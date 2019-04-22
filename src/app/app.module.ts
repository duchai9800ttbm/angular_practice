import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { CurrencyDirective } from './directives/currency.directive';
import { TimerComponent } from './timer/timer.component';
import { TimeComponent } from './timer/time/time.component';
import { UtcComponent } from './timer/utc/utc.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DatePickerModule, TimePickerModule, DateInputModule } from '@progress/kendo-angular-dateinputs';
import { DateDirective } from './directives/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    NavComponent,
    TimerComponent,
    TimeComponent,
    UtcComponent,
    DateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputsModule,
    DatePickerModule,
    TimePickerModule,
    DateInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
