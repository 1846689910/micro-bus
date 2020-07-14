import React, { Fragment } from "react";
import { handler } from "../../server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../../server/utils";
import BaseProps from "../../server/models/BaseProps";
import { json, send } from "micro";
import { OK } from "http-status";

export default function Graphql(props: BaseProps) {
  console.log(props);
  return <Fragment />;
}

/**
 * @description for /type-18-hek of micro server
 * @param {Object} context { params, req, res, query, preview, previewData }, res is node.js res
 * @returns {Object} the component props
 */
export async function getServerSideProps(context) {
  const { req, res } = context;
  setAllowCorsHeaders(res);
  if (req.method === "OPTIONS") {
    return send(res, OK);
  }
  const body = await json(req);
  console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  await handler(req, res);
  return {
    props: {
      host: req.host,
      method: req.method,
      url: req.url,
      timestamp: Date.now(),
      body,
    }, // will be passed to the page component as props
  };
}
