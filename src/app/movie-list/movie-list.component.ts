import { Component } from '@angular/core';
import { Media } from '../models/Media';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  medias: Media[];
  constructor(private mediaService: MediaService) {
    this.medias = mediaService.getAllMovies();
  }
}
