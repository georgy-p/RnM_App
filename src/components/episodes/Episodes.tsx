"use client";

import React from "react";
import EpisodCard from "components/episodeCard/episodeCard";
import { useStore } from "store/StoreProvider";
import { observer } from "mobx-react-lite";

const mockCard = {
  name: "Dog days are over",
  airDate: "16 feb 2014",
  id: 1,
};

const Episodes = observer(() => {
  const store = useStore();
  console.log(store.searchValue);

  return (
    store.searchValue && (
      <div className="episodes">
        <EpisodCard card={mockCard} />
      </div>
    )
  );
});

export default Episodes;
