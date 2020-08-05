import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Title from "../client/ts/home/Title";
import APITable from "../client/ts/home/APITable";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "90vh",
    margin: 0,
    padding: 0,
  },
  inner: {
    height: "60vh",
  },
  container: {
    padding: 0,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid
        className={classes.outer}
        container
        alignItems="center"
        justify="center"
      >
        <Grid item container direction="column" className={classes.inner}>
          <Title />
          <Grid container justify="center">
            <APITable />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
