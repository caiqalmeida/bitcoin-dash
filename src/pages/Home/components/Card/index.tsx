import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MaterialCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  CardContainer: {
    marginBottom: 20,

    "&:first-child": {
      marginTop: 20,
    },
  },
});

interface Props {
  title: string;
  values: string[];
  btnText: string;
}

export const Card = (props: Props) => {
  const classes = useStyles();

  return (
    <MaterialCard variant="outlined" className={classes.CardContainer}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.title}
        </Typography>
        {props.values.map((value) => (
          <Typography>{value}</Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">{props.btnText}</Button>
      </CardActions>
    </MaterialCard>
  );
};
