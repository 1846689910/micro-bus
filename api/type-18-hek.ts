import { NowRequest, NowResponse } from "@vercel/node";
import { json, send } from "micro";
import { OK } from "http-status";
import { handler } from "../src/server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../src/server/utils";

export default async (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  setAllowCorsHeaders(response);
  if (method === "OPTIONS") {
    return response.status(OK).end();
  }
  // const body = req.method === "POST" ? await json(req) : {};
  // console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  return await handler(request, response);
};
