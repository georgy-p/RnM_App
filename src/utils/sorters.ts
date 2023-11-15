import { Episode } from "store/AppStore";

export const sortByOldest = (episodes: Episode[]) =>
  episodes.sort((a, b) => {
    const aDate = new Date(a.air_date);
    const bDate = new Date(b.air_date);
    // @ts-ignore
    return aDate - bDate;
  });

export const sortByNewest = (episodes: Episode[]) =>
  episodes.sort((a, b) => {
    const aDate = new Date(a.air_date);
    const bDate = new Date(b.air_date);
    // @ts-ignore
    return bDate - aDate;
  });
