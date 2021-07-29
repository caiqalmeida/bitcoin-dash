import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";

const useStyles = makeStyles({
  pageContainer: {
    height: "100vh",
  },
  formContainer: {
    minWidth: 350,
  },
});

export const Login = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const classes = useStyles();

  return (
    <Grid
      className={classes.pageContainer}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper className={classes.formContainer} elevation={3}>
        {isSigningUp ? (
          <SignUpForm setIsSigningUp={setIsSigningUp} />
        ) : (
          <SignInForm setIsSigningUp={setIsSigningUp} />
        )}
      </Paper>
    </Grid>
  );
};
