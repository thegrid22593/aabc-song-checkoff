import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgModule } from '@angular/core';

const firebaseConfig = {
  apiKey: "AIzaSyAYThpdcu3zb4ll_q6BJkpaWYS8XTVVz4Y",
  authDomain: "aabc-checkoff.firebaseapp.com",
  databaseURL: "https://aabc-checkoff.firebaseio.com",
  storageBucket: "aabc-checkoff.appspot.com",
  messagingSenderId: "920421563150"
}

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  exports: [
    AngularFireModule
  ]
})

export class AngularFireConfigModule {}
