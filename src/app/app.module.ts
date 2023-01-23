import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponents} from "./login/login.components";
import {MessageComponents} from "./message/message.components";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponents,
    MessageComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
