import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import APITableRow from "./APITableRow";

const useStyles = makeStyles({
  table: {
    minWidth: "500",
  },
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
          <APITableRow
            api="/_api/type-18-hek"
            linkName="type-18-hek"
            linkHref="https://github.com/1846689910/type-18-hek"
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
