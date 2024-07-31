import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarioComponent } from './calendario.component';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [CalendarioComponent]
})
export class CalendarioModule { }
