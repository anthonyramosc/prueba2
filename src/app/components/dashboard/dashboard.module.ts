import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr'


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule, DashboardComponent,     
    NgbModule,
    ToastrModule.forRoot(),

  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
