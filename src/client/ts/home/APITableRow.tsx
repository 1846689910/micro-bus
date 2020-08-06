import React, { useState, useEffect } from "react";
import EndPointProfile from "../../../server/EndPointProfile";
import {
  TableCell,
  TableRow,
  makeStyles,
  Link,
  Tooltip,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
import { Status } from "./utils";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  // endPoint: {
  //   fontSize: "14px",
  // },
  bad: {
    color: red[500],
  },
  good: {
    color: green[500],
  },
});

export default function APITableRow({ profile }: { profile: EndPointProfile }) {
  const classes = useStyles();
  const { api, linkName, linkHref } = profile;
  const [curStatus, setCurStatus] = useState<number>(Status.PENDING);
  useEffect(() => {
    (async () => {
      const isGood = await profile.checkStatus();
      setCurStatus(isGood ? Status.GOOD : Status.BAD);
    })();
  }, []);
  const handleClick = async () => {
    setCurStatus(Status.PENDING);
    const isGood = await profile.checkStatus();
    setCurStatus(isGood ? Status.GOOD : Status.BAD);
  };
  return (
    <TableRow>
      <TableCell>
        <Link href={api} target="_blank" rel="noopener">
          {api}
        </Link>
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
      <TableCell>
        <Tooltip title="update status" placement="top">
          <IconButton size="small" onClick={handleClick}>
            {curStatus === Status.BAD ? (
              <CancelIcon className={classes.bad} />
            ) : curStatus === Status.GOOD ? (
              <CheckCircleIcon className={classes.good} />
            ) : (
              <CircularProgress size={20} />
            )}
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
