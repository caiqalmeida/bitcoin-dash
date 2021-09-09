import React, { useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { getUserToken } from "../../utils/storage";

export const Home = () => {
  useEffect(() => console.log("token", getUserToken()), []);
  return (
    <Container maxWidth="sm">
      <Typography>Material ui</Typography>
    </Container>
  );
};
