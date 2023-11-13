"use client";
import React, { FC } from "react";
import { Card, CardActionArea, Typography } from "@mui/material";

interface CardProps {
  card: {
    name: string;
    airDate: string;
    id: number;
  };
}
const EpisodeCard: FC<CardProps> = ({ card }) => {
  const handleClick = () => console.log(card.id);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 510 }}>
      <CardActionArea sx={{ padding: "20px" }} onClick={handleClick}>
        <Typography color="text.secondary">Episode name:</Typography>
        <Typography sx={{ paddingTop: "10px" }} variant="h5">
          &ldquo;{card.name}&ldquo;
        </Typography>
        <Typography sx={{ paddingTop: "25px" }} color="text.secondary">
          Air date:<span style={{ color: "black" }}>{card.airDate}</span>
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeCard;
