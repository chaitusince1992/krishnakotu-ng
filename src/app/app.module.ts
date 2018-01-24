import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* Bootstrap modules */
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';
import { LegacyPixelsComponent } from './legacy-pixels/legacy-pixels.component';
import { FunvillasComponent } from './funvillas/funvillas.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LegacyPixelsComponent,
    FunvillasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
