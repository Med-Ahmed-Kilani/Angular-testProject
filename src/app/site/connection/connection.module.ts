import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { ListRecComponent } from '../reclamation/list-rec/list-rec.component';
import { AuthGuard } from './auth-guard';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [LoginComponent, NewAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
      {path : 'login', component: LoginComponent},
      {path : 'newaccount', component: NewAccountComponent},
      {path : 'listrec',canActivate:[AuthGuard], component : ListRecComponent},
      
    ])
  ],
  providers: [AuthService,AngularFirestore]
})
export class ConnectionModule { }
