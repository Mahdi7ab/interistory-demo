import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from '../models/Media';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent {
  media: Media;

  mediaId: number;
  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {
    this.mediaId = route.snapshot.params['id'];
    this.media = mediaService.get(this.mediaId);
  }
}
