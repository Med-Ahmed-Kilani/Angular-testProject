import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationComponent } from './reclamation.component';
import { RouterModule } from '@angular/router';
import { ListRecComponent } from './list-rec/list-rec.component';


@NgModule({
  declarations: [ReclamationComponent, ListRecComponent],
  imports: [
    RouterModule.forChild([
      {path:'reclamation', component: ReclamationComponent}
    ]),
    CommonModule
  ]
})
export class ReclamationModule{}
