import React, { Fragment } from "react";
import { handler } from "../../server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../../server/utils";
import { json, send } from "micro";
import { OK } from "http-status";
import Http from "http";

export default function Type18hek() {
  return <Fragment />;
}

/**
 * @description for /type-18-hek of micro server
 * @param {Object} context { params, req, res, query, preview, previewData }, res is node.js res
 * @returns {Object} the component props
 */
export async function getServerSideProps(context: {
  req: { host: string; method: string; url: string };
  res: Http.ServerResponse;
}) {
  const { req, res } = context;
  setAllowCorsHeaders(res);
  if (req.method === "OPTIONS") {
    return send(res, OK);
  }

  const body = req.method === "POST" ? await json(req) : {};
  console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  await handler(req, res);
  return {
    props: {},
  };
}
