import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { FilipinasComponent } from './filipinas/filipinas.component';
import { HongkongComponent } from './hongkong/hongkong.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { ModelService } from './model.service';
@NgModule({
  declarations: [
    AppComponent,
    NewyorkComponent,
    FilipinasComponent,
    HongkongComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  

  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
