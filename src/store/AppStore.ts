import { makeAutoObservable } from "mobx";

export interface Episode {
  air_date: string;
  id: string;
  name: string;
}
export class AppStore {
  episodes: Array<Episode> = [];
  searchValue = "";
  isSubmitted = false;
  isNewest = false;

  constructor() {
    makeAutoObservable(this);
  }
  setEpisodes(episodes: Array<Episode>) {
    this.episodes = episodes;
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  setSubmitted(value: boolean) {
    this.isSubmitted = value;
  }

  setNewest(value: boolean) {
    this.isNewest = value;
  }

  getEpisodes() {
    return this.episodes;
  }
}
