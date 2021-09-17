import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";

import { SigninParameters, SignupParameters } from "../../types/api";
import { signIn, signUp, authorize } from "../../services/api";
import { setUserToken } from "../../services/storage";

import { paths } from "../../routes/routes";

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
  const history = useHistory();

  function register({ name, email, password }: SignupParameters) {
    signUp({ name, email, password })
      .then((res) => {
        alert(`${res.name} was registered`);
        setIsSigningUp(false);
      })
      .catch((error) => {
        alert(
          `It was not possible register the user, verify the inserted data. ${error}`
        );
      });
  }

  function login({ email, password }: SigninParameters) {
    signIn({ email, password })
      .then((res) => {
        alert("Login Successful");
        setUserToken(res);
        authorize(res);
        history.push(paths.home);
      })
      .catch((error) => {
        alert(
          `It was not possible to login, verify the inserted data. ${error}`
        );
      });
  }

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
          <SignUpForm register={register} />
        ) : (
          <SignInForm login={login} setIsSigningUp={setIsSigningUp} />
        )}
      </Paper>
    </Grid>
  );
};
