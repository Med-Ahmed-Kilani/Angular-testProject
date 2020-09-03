import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualitesComponent } from './actualites.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component'; 

@NgModule({
  declarations: [
    ActualitesComponent,
    DetailsComponent  
  ],
  imports: [
    RouterModule.forChild ([
      { path: '', component: ActualitesComponent },
      { path: 'actualites',component: ActualitesComponent },
      { path: 'actualites/:id', component: DetailsComponent },
      { path: '', component: DetailsComponent }
    ]),
    
    CommonModule
  ],
  providers: []
})
export class ActualitesModule { }
