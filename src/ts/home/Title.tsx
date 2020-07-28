import React, { Fragment, useContext } from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import MediaQueryContext from "../../ts/MediaQueryContext";

const useStyles = makeStyles({
  grid: {
    height: "60px",
  },
  subTitle: {
    fontSize: "12px",
  },
});

export default function Title() {
  const { isMobile, mediaQuery } = useContext(MediaQueryContext);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="flex-end"
      >
        <Typography variant={isMobile ? "body1" : "h4"}>
          Welcome to{" "}
          <Link
            href="https://github.com/1846689910/micro-bus"
            target="_blank"
            rel="noopener"
          >
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
        <Typography
          variant={isMobile ? "body1" : "h5"}
          className={isMobile ? classes.subTitle : ""}
        >
          The public Apollo GraphQL server for multiple resouces
        </Typography>
      </Grid>
    </Fragment>
  );
}
