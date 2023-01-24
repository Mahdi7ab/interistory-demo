import { Component } from '@angular/core';
import { Media } from '../models/Media';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  medias: Media[];
  constructor(private mediaService: MediaService) {
    this.medias = mediaService.getAll().sort((a, b) => 0.5 - Math.random());
  }
}
