import React, { Fragment } from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    height: "60px",
  },
});

export default function Title() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="flex-end"
      >
        <Typography variant="h4">
          Welcome to{" "}
          <Link href="https://github.com/1846689910/micro-bus" target="_blank" rel="noopener">
            micro-bus
          </Link>
          !
        </Typography>
      </Grid>
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">
          The public Apollo GraphQL server for multiple resouces
        </Typography>
      </Grid>
    </Fragment>
  );
}
