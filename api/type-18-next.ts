import { NowRequest, NowResponse } from "@vercel/node";
import { OK } from "http-status";
import { setAllowCorsHeaders } from "../src/server/utils";
import { handler } from "../src/server/type-18-next/graphql";

export default async (request: NowRequest, response: NowResponse) => {
  const { method } = request;
  setAllowCorsHeaders(response);
  if (method === "OPTIONS") {
    return response.status(OK).end();
  }
  await handler(request, response);
};
