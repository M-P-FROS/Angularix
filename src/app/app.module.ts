import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FigurineModule } from './figurine/figurine.module';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    FigurineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
