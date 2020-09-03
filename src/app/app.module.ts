import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActualitesModule } from './site/actualites/actualites.module';
import { ReclamationModule } from './site/reclamation/reclamation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from './site/error/error.module';
import { SharedModule } from './site/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ConnectionModule } from './site/connection/connection.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    
    ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ActualitesModule,
    ReclamationModule,
    ConnectionModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
