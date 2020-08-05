import { NowRequest, NowResponse } from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method } = request;
  const obj = {
    request: {
      query,
      cookies,
      body,
      method,
    },
  };
  response.status(200).send(JSON.stringify(obj, null, 2));
};
