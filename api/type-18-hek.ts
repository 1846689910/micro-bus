import { NowRequest, NowResponse } from "@vercel/node";
import { json, send } from "micro";
import { OK } from "http-status";
import { handler } from "../src/server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../src/server/utils";

export default async (req: NowRequest, res: NowResponse) => {
  const { query, cookies, body, method, headers } = req;
  setAllowCorsHeaders(res);
  if (method === "OPTIONS") {
    res.status(OK).end();
    return send(res, OK);
  }
  // const body = req.method === "POST" ? await json(req) : {};
  // console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  await handler(req, res);
  return {
    props: {
      method: req.method,
      url: req.url,
      timestamp: Date.now(),
      body,
    }, // will be passed to the page component as props
  };
};
