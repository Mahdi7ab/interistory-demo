import { Component } from '@angular/core';
import { Media } from '../models/Media';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss'],
})
export class SerieListComponent {
  medias: Media[];
  constructor(private mediaService: MediaService) {
    this.medias = mediaService.getAllSeries();
  }
}
