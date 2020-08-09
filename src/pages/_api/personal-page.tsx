import React, { Fragment } from "react";
import { handler } from "../../server/personal-page/graphql";
import { setAllowCorsHeaders } from "../../server/utils";
import { send } from "micro";
import { OK } from "http-status";
import Http from "http";

export default function PersonalPage() {
  return <Fragment />;
}

/**
 * @description for /personal-page of micro server
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
  await handler(req, res);
  return {
    props: {},
  };
}
