import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
