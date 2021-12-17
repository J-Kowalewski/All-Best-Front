import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestGenreComponent } from './best-genre/best-genre.component';
import { BestListComponent } from './best-list/best-list.component';
import { BestProductComponent } from './best-product/best-product.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BestGenreComponent,
    BestListComponent,
    BestProductComponent,
    DisplayMovieComponent,
    DisplayProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
