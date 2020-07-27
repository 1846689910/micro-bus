import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Title from "../ts/home/Title";
import APITable from "../ts/home/APITable";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "90vh",
    // border: "1px solid black",
    margin: 0,
    padding: 0,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      <Grid
        className={classes.outer}
        container
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          container
          direction="column"
          style={{ height: "60vh", border: "1px solid black" }}
        >
          <Title />
          <Grid container justify="center">
            <APITable/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
