import { gql } from "graphql-request";
import { Episode } from "store/AppStore";

export const endpoint = "https://rickandmortyapi.com/graphql";

export interface EpisodesResults {
  episodes: {
    results: Episode[];
  };
}

export const FETCH_EPISODES_BY_NAME = gql`
  query EpisodesQuery($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        air_date
        id
        name
      }
    }
  }
`;

export const getFilterQueryVariables = (name: string) => {
  return {
    filter: {
      name,
    },
  };
};

interface character {
  name: string;
  status: string;
}
interface currentEpisode {
  air_date: string;
  episode: string;
  name: string;
  characters: character[];
}
export interface EpisodeByIdInterface {
  episodesByIds: currentEpisode[];
}

export const GET_EPISODE_BY_ID = gql`
  query EpisodeQuery($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      air_date
      name
      episode
      characters {
        name
        status
      }
    }
  }
`;

export const getEpisodeQueryVariables = (id: string) => {
  return { ids: `[${id}]` };
};
