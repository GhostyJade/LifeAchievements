import React from "react";
import { Grid } from "@material-ui/core";
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";

export default function Home() {
  return (
      <Grid container>
        <HeaderBar />
        <FooterBar />
      </Grid>
  );
}
