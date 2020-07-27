import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: "500",
  },
  endPoint: {
    fontSize: "14px"
  }
});

export default function APITable() {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>End Point(API)</TableCell>
            <TableCell>Consumer</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><code className={classes.endPoint}>/_api/type-18-hek</code></TableCell>
            <TableCell>
              <Link
                href="https://github.com/1846689910/type-18-hek"
                target="_blank"
                rel="noopener"
              >
                type-18-hek
              </Link>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
