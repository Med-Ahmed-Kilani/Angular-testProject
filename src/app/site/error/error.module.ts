import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '404', component: ErrorComponent },
      { path: '**', redirectTo: '/404'}
      ])
  ]
})
export class ErrorModule { }
