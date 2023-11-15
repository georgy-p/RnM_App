"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useStore } from "store/StoreProvider";
import { observer } from "mobx-react-lite";
import {
  endpoint,
  EpisodesResults,
  FETCH_EPISODES_BY_NAME,
  getFilterQueryVariables,
} from "serverAPI/serverQueries";
import EpisodeCard from "components/episodeCard/episodeCard";
import { request } from "graphql-request";
import "./styles.css";
import { Button, Skeleton } from "@mui/material";
import { sortByNewest, sortByOldest } from "utils/sorters";

const FoundEpisodes = observer(() => {
  const [showedEpisodes, setShowedEpisodes] = useState([]);
  const store = useStore();

  useEffect(() => {
    request<EpisodesResults>(
      endpoint,
      FETCH_EPISODES_BY_NAME,
      getFilterQueryVariables(store.searchValue),
    ).then(({ episodes: { results } }) => {
      const sortedEpisodes = store.isNewest
        ? sortByNewest(results)
        : sortByOldest(results);
      store.setEpisodes(sortedEpisodes);
      setShowedEpisodes(sortedEpisodes.slice(0, 6));
    });
  }, [store.isSubmitted]);

  const episodes = store.getEpisodes();

  const getMoreEpisodes = () => {
    const lastIndex = showedEpisodes.length - 1;
    const newEpisodes = episodes.slice(lastIndex + 1, lastIndex + 6);
    setShowedEpisodes(showedEpisodes.concat(newEpisodes));
  };

  return (
    store.isSubmitted && (
      <div className='episodesContainer'>
        <p>Founded {episodes.length} episodes</p>
        <div className='episodes'>
          {showedEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        {episodes.length > 5 && (
          <Button variant='contained' className='btn' onClick={getMoreEpisodes}>
            Load more
          </Button>
        )}
      </div>
    )
  );
});

export default FoundEpisodes;
