import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { MediasComponent } from './medias/medias.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { SerieListComponent } from './serie-list/serie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'medias',
    component: MediasComponent,
    children: [
      { path: 'movies', component: MovieListComponent },
      { path: 'series', component: SerieListComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
    ],
  },
  { path: 'medias/:id', component: MediaDetailsComponent },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
