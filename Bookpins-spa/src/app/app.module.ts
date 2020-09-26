import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultlistComponent } from './searchresultlist/searchresultlist.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from './_services/authentication.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      SearchbarComponent,
      SearchresultlistComponent,
      BookcardComponent,
      LoginComponent,
      SignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
     HttpClient,
     AuthenticationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
