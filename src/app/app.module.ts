import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { MediasComponent } from './medias/medias.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaDetailsComponent,
    MovieListComponent,
    MediasComponent,
    MovieListItemComponent,
    SerieListComponent,
    PageNotFountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
