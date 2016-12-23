import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AngularFireModule
  ],
  exports: [
    AngularFireConfigModule
  ]
})

export class AngularFireConfigModule {}
