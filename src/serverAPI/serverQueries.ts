import {gql} from "@apollo/client";

export const GET_EPISODES_BY_NAME = gql`
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
            name
        }
    }
};

export const GET_EPISODE_BY_ID = gql`query EpisodeQuery($ids: [ID!]!) {
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