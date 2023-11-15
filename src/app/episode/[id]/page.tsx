import { request } from "graphql-request";
import {
  endpoint,
  EpisodeByIdInterface,
  GET_EPISODE_BY_ID,
  getEpisodeQueryVariables,
} from "serverAPI/serverQueries";
import { Typography } from "@mui/material";
import React, from "react";
import "./styles.css";

type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const result = await request<EpisodeByIdInterface>(
    endpoint,
    GET_EPISODE_BY_ID,
    getEpisodeQueryVariables(id),
  );
  return result.episodesByIds;
};

const EpisodePage = async ({ params }: Props) => {
  const episodeData = await getData(params.id);
  const [currentEpisode] = episodeData;
  const { air_date, episode, name, characters } = currentEpisode;

  return (
    <div className='episode'>
      <Typography variant='subtitle2'>Episode: {episode}</Typography>
      <Typography className='title' variant='h2'>
        &ldquo;{name}&ldquo;
      </Typography>
      <Typography sx={{ paddingTop: "25px" }} color='text.secondary'>
        Air date: {air_date}
      </Typography>
      <Typography className='subtitle' variant='h4'>
        Characters:
      </Typography>
      <ul className='characters'>
        {characters.map((hero, i) => (
          <li className='hero' key={i}>
            <Typography variant='subtitle1'>
              Hero: <span className='name'>{hero.name}</span>
            </Typography>
            <Typography variant='subtitle2'>
              Status: <span className={hero.status}>{hero.status}</span>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodePage;
