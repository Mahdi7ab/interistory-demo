export class Media {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public year: number,
    public image: string,
    public imdbRate: number,
    public type: number //1:Movie 2:Serie
  ) {}
}
