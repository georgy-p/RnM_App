import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "15px",
      }}
    >
      <Typography color={"white"}>Created by Georgy Pigar</Typography>
    </div>
  );
};

export default Footer;
