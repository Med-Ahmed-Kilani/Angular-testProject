import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavmenuComponent],
  exports: [NavmenuComponent],
  imports: [
    RouterModule.forChild([]),
    CommonModule
  ]
})
export class SharedModule { }
