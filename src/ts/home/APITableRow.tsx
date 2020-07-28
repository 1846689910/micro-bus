import React from "react";
import { TableCell, TableRow, makeStyles, Link } from "@material-ui/core";

type Props = {
  api: string;
  linkName: string;
  linkHref: string | undefined;
};

const useStyles = makeStyles({
  endPoint: {
    fontSize: "14px",
  },
});

export default function Type18hek({ api, linkName, linkHref }: Props) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell>
        <code className={classes.endPoint}>{api}</code>
      </TableCell>
      <TableCell>
        {linkHref ? (
          <Link href={linkHref} target="_blank" rel="noopener">
            {linkName}
          </Link>
        ) : (
          linkName
        )}
      </TableCell>
      <TableCell>Status</TableCell>
    </TableRow>
  );
}
