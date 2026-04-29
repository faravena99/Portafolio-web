import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOverlayModule } from './components/nav-overlay/nav-overlay.module';
import { MainModule } from './layouts/main/main.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponent,
    MainModule,
    NavOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
