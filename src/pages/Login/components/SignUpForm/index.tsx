import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { SignupParameters } from "../../../../types/api";

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
  register: (a: SignupParameters) => void;
}

export const SignUpForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  function handleSignup() {
    props.register({ name, email, password });
  }

  return (
    <Box p={3} className={classes.loginBox}>
      <Typography className={classes.title}>Register</Typography>
      <TextField
        className={classes.textField}
        required
        id="input-name"
        label="Name"
        type="text"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        value={name}
      />
      <TextField
        className={classes.textField}
        required
        id="input-email"
        label="E-mail"
        type="email"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
      />
      <TextField
        className={classes.textField}
        required
        id="input-password"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        value={password}
      />
      <Button
        className={classes.signupButton}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSignup}
      >
        Sign Up
      </Button>
    </Box>
  );
};
