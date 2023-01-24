import { Injectable } from '@angular/core';
import { Media } from '../models/Media';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  medias: Media[] = [
    new Media(
      1,
      'Inception',
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      2010,
      '/assets/images/inception.jpg',
      8.7,
      1
    ),
    new Media(
      2,
      'Interstellar',
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      2014,
      '/assets/images/interstellar.jpg',
      8.6,
      1
    ),
    new Media(
      3,
      'Parasite',
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      2019,
      '/assets/images/parasite.jpg',
      8.5,
      1
    ),
    new Media(
      4,
      'Joker',
      'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
      2019,
      '/assets/images/joker.jpg',
      8.3,
      1
    ),
    new Media(
      5,
      'Léon: The Professional',
      "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      1994,
      '/assets/images/leon.jpg',
      8.5,
      1
    ),
    new Media(
      6,
      'Memento',
      "A man with short-term memory loss attempts to track down his wife's murderer.",
      2000,
      '/assets/images/memento.jpg',
      8.4,
      1
    ),
    new Media(
      7,
      'Good Will Hunting',
      'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
      1997,
      '/assets/images/good-will-hunting.jpg',
      8.3,
      1
    ),
    new Media(
      8,
      'Top Gun: Maverick',
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
      2022,
      '/assets/images/top-gun-maverick.jpg',
      8.3,
      1
    ),
    new Media(
      101,
      'Breaking Bad',
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
      2008,
      '/assets/images/breaking-bad.jpg',
      9.5,
      2
    ),
    new Media(
      102,
      'Game of Thrones',
      'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      2011,
      '/assets/images/game-of-thrones.jpg',
      9.2,
      2
    ),
    new Media(
      103,
      'Friends',
      'Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.',
      1994,
      '/assets/images/friends.jpg',
      8.9,
      2
    ),
    new Media(
      104,
      "The Queen's Gambit",
      'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.',
      2020,
      '/assets/images/queens-gamit.jpg',
      8.6,
      2
    ),
    new Media(
      105,
      'House of the Dragon',
      'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
      2022,
      '/assets/images/house-of-the-dragon.jpg',
      8.5,
      2
    ),
    new Media(
      106,
      "The Handmaid's Tale",
      'Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.',
      2017,
      '/assets/images/the-handmaids-tale.jpg',
      8.4,
      2
    ),
    new Media(
      107,
      'Mare of Easttown',
      'A detective in a small Pennsylvania town investigates a local murder while trying to keep her life from falling apart.',
      2021,
      '/assets/images/mare-of-easttown.jpg',
      8.4,
      2
    ),
    new Media(
      108,
      'Squid Game',
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
      2021,
      '/assets/images/squid-game.jpg',
      8,
      2
    ),
  ];
  constructor() {}

  getAll(): Media[] {
    return this.medias;
  }

  getAllMovies(): Media[] {
    return this.medias.filter((q) => q.type == 1);
  }

  getAllSeries(): Media[] {
    return this.medias.filter((q) => q.type == 2);
  }

  get(id: number): Media {
    const media: any = this.medias.find((q) => q.id == id);
    return media;
  }

  add(model: Media): void {
    this.medias.push(model);
  }

  edit(model: Media): void {
    const index = this.medias.findIndex((q) => q.id == model.id);
    this.medias[index] = model;
  }

  remove(id: number): void {
    this.medias = this.medias.filter((q) => q.id != id);
  }
}
