import { NowRequest, NowResponse } from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
  const obj = {
    request,
    response,
  };
  response.status(200).send(JSON.stringify(obj, null, 2));
};
