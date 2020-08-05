import { NowRequest, NowResponse } from "@vercel/node";
import { json, send } from "micro";
import { OK } from "http-status";

export default (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  if (method === "OPTIONS") {
    return response.status(OK).end();
  }
  const obj = {
    request: {
      headers,
      query,
      cookies,
      body,
      method,
    },
  };
  return response.status(OK).send(JSON.stringify(obj, null, 2));
};
