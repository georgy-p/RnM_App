import { Episode } from "store/AppStore";

export const sortByOldest = (episodes: Episode[]) =>
  episodes.sort((a, b) => {
    const aDate = new Date(a.air_date);
    const bDate = new Date(b.air_date);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return aDate - bDate;
  });

export const sortByNewest = (episodes: Episode[]) =>
  episodes.sort((a, b) => {
    const aDate = new Date(a.air_date);
    const bDate = new Date(b.air_date);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return bDate - aDate;
  });
