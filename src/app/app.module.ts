import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AF} from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  providers: [AF]
})
export class AppModule { }

<script src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
  <script>
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_6WPLyMkW3XRDiJvbQWePRFSRiYKN38k",
  authDomain: "learnjavascript-fb214.firebaseapp.com",
  databaseURL: "https://learnjavascript-fb214.firebaseio.com",
  storageBucket: "learnjavascript-fb214.appspot.com",
  messagingSenderId: "584049379460"
};
firebase.initializeApp(config);
</script>
