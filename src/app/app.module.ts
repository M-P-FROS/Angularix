import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FigurineModule } from './figurine/figurine.module';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageAccueilComponent,
    HeaderComponent,
    PageAboutComponent,
    OrderByPipe,
    FilterPipe,
    FooterComponent,

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
