export class Billboard {
  rank: number;
  song: string;
  singer: string;

  constructor(rank: number, song: string, singer: string) {
    this.rank = rank;
    this.song = song;
    this.singer = singer;
  }
}
