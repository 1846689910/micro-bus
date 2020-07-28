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
import type18hekProfile from "../../server/type-18-hek/profile";

const useStyles = makeStyles({
  table: {
    minWidth: "500",
  },
});

const profiles = [type18hekProfile];

export default function APITable() {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>GraphQL API</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            profiles.map((profile, i) => <APITableRow profile={profile} key={i}/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
