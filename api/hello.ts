import { NowRequest, NowResponse } from "@vercel/node";
import { OK } from "http-status";
import Promise from "bluebird";

export default async (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  await Promise.delay(1000);
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
