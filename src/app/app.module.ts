import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoodSidePagesModule } from './pages/good-side-pages.module';
import { BadSidePagesModule } from './pages/bad-side-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoodSidePagesModule,
    BadSidePagesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
