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
  signupButton: {
    width: "100%",
    marginBottom: 10,
  },
});

interface Props {
  setIsSigningUp: (a: boolean) => void;
}

export const SignUpForm = (props: Props) => {
  const classes = useStyles();

  return (
    <Box p={3} className={classes.loginBox}>
      <Typography className={classes.title}>Register</Typography>
      <TextField
        className={classes.textField}
        required
        label="Name"
        type="text"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        required
        label="E-mail"
        type="email"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        required
        label="Password"
        type="password"
        defaultValue=""
        variant="outlined"
      />
      <Button
        className={classes.signupButton}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => props.setIsSigningUp(false)}
      >
        Sign Up
      </Button>
    </Box>
  );
};
