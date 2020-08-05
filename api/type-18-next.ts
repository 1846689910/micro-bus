import { NowRequest, NowResponse } from "@vercel/node";
import { json, send } from "micro";
import { OK } from "http-status";
import { handler } from "../src/server/type-18-next/graphql";
import { setAllowCorsHeaders } from "../src/server/utils";

export default async (req: NowRequest, res: NowResponse) => {
  setAllowCorsHeaders(res);
  if (req.method === "OPTIONS") {
    return send(res, OK);
  }
  const body = req.method === "POST" ? await json(req) : {};
  console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  await handler(req, res);
  return {
    props: {
      host: req.host || "",
      method: req.method,
      url: req.url,
      timestamp: Date.now(),
      body,
    }, // will be passed to the page component as props
  };
};
