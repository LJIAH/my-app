///<reference path="../../node_modules/@angular/router/src/config.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

import { routing } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import {LoggingService} from './logging.service';
import 'Rxjs/Rx';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Initialize Firebase
const myFirebaseConfig = {
  apiKey: 'AIzaSyAc5baR016Rj4rAl7MKgQBpuAqWh0ft1HM',
  authDomain: 'angular2-a6834.firebaseapp.com',
  databaseURL: 'https://angular2-a6834.firebaseio.com',
  projectId: 'angular2-a6834',
  storageBucket: 'angular2-a6834.appspot.com',
  messagingSenderId: '189765392703'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(myFirebaseConfig)
  ],
  providers: [
    LoggingService,
    DataService,
    AngularFireAuth,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
