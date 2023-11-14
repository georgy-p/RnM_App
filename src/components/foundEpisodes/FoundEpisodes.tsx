"use client";

import React from "react";
import EpisodCard from "components/episodeCard/episodeCard";
import { useStore } from "store/StoreProvider";
import { observer } from "mobx-react-lite";
import { useSuspenseQuery } from '@apollo/client';
import { GET_EPISODE_BY_ID, getEpisodeQueryVariables } from 'serverAPI/serverQueries';

const mockCard = {
  name: "Dog days are over",
  airDate: "16 feb 2014",
  id: 1,
};

const FoundEpisodes = observer(() => {
  const store = useStore();

   // const { data } = useSuspenseQuery(GET_EPISODE_BY_ID, {
   //     variables: getEpisodeQueryVariables(store.searchValue)
   // })

    if (store.searchValue.length === 0) {
        return  null;
    }



   // console.log(data);



  return (
    store.searchValue && (
      <div className="episodes">
        <EpisodCard card={mockCard} />
      </div>
    )
  );
});

export default FoundEpisodes;
