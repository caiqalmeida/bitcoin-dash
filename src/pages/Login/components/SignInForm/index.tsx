import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  loginBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    marginBottom: 25,
    fontSize: "2rem",
  },
  textField: {
    width: "100%",
    marginBottom: 15,
  },
  signinButton: {
    width: "100%",
    marginBottom: 10,
  },
  signupText: {
    alignSelf: "flex-start",
  },
  signupButton: {
    border: 0,
    background: "transparent",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color .3s ease",

    "&:hover": {
      color: "blue",
    },
  },
});

interface Props {
  setIsSigningUp: (a: boolean) => void;
}

export const SignInForm = (props: Props) => {
  const classes = useStyles();

  return (
    <Box p={3} className={classes.loginBox}>
      <Typography className={classes.title}>Sign Up</Typography>
      <TextField
        className={classes.textField}
        required
        id="outlined-required"
        label="E-mail"
        type="email"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        required
        id="outlined-required"
        label="Password"
        type="password"
        defaultValue=""
        variant="outlined"
      />
      <Button
        className={classes.signinButton}
        variant="contained"
        color="primary"
        size="large"
      >
        Sign in
      </Button>
      <Typography className={classes.signupText}>
        Don&apos;t have an account ?{" "}
        <button
          className={classes.signupButton}
          type="button"
          onClick={() => props.setIsSigningUp(true)}
        >
          Sign up
        </button>
      </Typography>
    </Box>
  );
};
