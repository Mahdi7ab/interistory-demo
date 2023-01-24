import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent {
  @Input() media: any;

  getMedia() {
    return this.media;
  }
}
