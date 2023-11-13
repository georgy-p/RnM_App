import { makeAutoObservable } from "mobx";

interface Episode {
  air_date: string;
  id: string;
  name: string;
}
export class AppStore {
  episodes: Array<Episode> = [];
  searchValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  sortByOldest() {
    this.episodes = this.episodes.sort((a, b) => {
      const aDate = new Date(a.air_date);
      const bDate = new Date(b.air_date);
      // @ts-ignore
      return aDate - bDate;
    });
  }

  sortByNewest() {
    this.episodes = this.episodes.sort((a, b) => {
      const aDate = new Date(a.air_date);
      const bDate = new Date(b.air_date);
      // @ts-ignore
      return bDate - aDate;
    });
  }
  setEpisodes(episodes: Array<Episode>) {
    this.episodes = episodes;
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }
}
