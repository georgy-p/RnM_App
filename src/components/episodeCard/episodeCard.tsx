import React, { FC } from "react";
import { Card, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  episode: {
    name: string;
    air_date: string;
    id: string;
  };
}
const EpisodeCard: FC<Props> = ({ episode }) => {
  return (
    <Link href={`/episode/${episode.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ minWidth: 275, maxWidth: 510 }}>
        <CardActionArea sx={{ padding: "20px" }}>
          <Typography color='text.secondary'>Episode name:</Typography>
          <Typography sx={{ paddingTop: "10px" }} variant='h5'>
            &ldquo;{episode.name}&ldquo;
          </Typography>
          <Typography sx={{ paddingTop: "25px" }} color='text.secondary'>
            Air date: <span style={{ color: "black" }}>{episode.air_date}</span>
          </Typography>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default EpisodeCard;
