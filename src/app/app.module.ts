import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { EditlistingComponent } from './components/editlisting/editlisting.component';
import { AngularFireModule } from 'angularfire2';
import { FirebseService } from "./services/firebse.service";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAZA0F8_nf8ZJIZ5aLrCyptEg6K1jpvtB8',
    authDomain: '<bussiness-listings.firebaseapp.com>',
    databaseURL: '<https://bussiness-listings.firebaseio.com>',
    projectId: '<bussiness-listings>',
    storageBucket: '<bussiness-listings.appspot.com>',
    messagingSenderId: '<207880425023>'
  }
};

// const firebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Popup
// };



const appRoutes : Routes = [
    {path:'',component:HomeComponent},
    {path:'listings',component:ListingsComponent},
    {path:'addlistings',component:AddlistingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddlistingComponent,
    EditlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule
  ],
  providers: [FirebseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
